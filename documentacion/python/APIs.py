# coding:utf-8

## Script python para obtener la localizaciÃ³n de los vehÃ­culos de los
## diferentes servicios 'sharing' de Zaragoza
## Codificado para python 3.6
## Comenzado en Octubre 2018
##
## Version: 0.2 pre_alpha
##
## Copyright: Alberto SubÃ­as y Guillermo SesÃ©

# Falta Bizi Zaragoza, Koko

import requests, pickle
from urllib.request import urlopen #python3
import json
import os.path
import dialogs

## Miramos si ya tenemos el login de Lime guardado
logged = False
fil = __file__[:__file__.rfind('/')]
if (os.path.isfile(fil+'/data/cookie.dat') and os.path.isfile(fil+'/data/token.dat')):
	logged = True
print(logged)

## Modelo Dict datos listaFinal
# {'serv': str, 'id': str, 'lat': double, 'lon': double, 'ca': int, 'info': str, 'url': str}
# serv > servicio al que pertenece el vehiculo
# id > identificador del vehiculo
# lat > coordenadas de latitud del vehiculo
# lon > coordenadas de longitud del vehiculo
# ca > carga del vehiculo
# info > infomacion adicional en formato texto
# url > url para abrir app

#own toString function
def _str(num):
	return '%.6f' %num
	
##-----------MUVING ZARAGOZA------------
def getMuvings(coords, listaFinal = []):
	lat1, lon1, lat2, lon2 = coords['mapBounds']
	data = requests.get('https://nube000.muving.com/RestAPI/RestServices/vehicles/in_rectangle?lat1='+lat1+'&lon1='+lon1+'&lat2='+lat2+'&lon2='+lon2)
	l_muving = json.loads(data.text)
	for moto in l_muving['object']:
		elem = {'serv': 'Muving','id': moto['vehicleRegistration'], 'lat': moto['lat'], 'lon': moto['lon'], 'ca':  moto['charge'], 'info': 'Cascos: %s' %moto['helmets'], 'url': 'https://itunes.apple.com/es/app/tu-muving/id1333669346?mt=8'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal
	
##----------------Lime-----------------
def loginLime():
	#window = dialogos.form_dialog(title='Phone Number', fields=[{'title':'Introduzca su numero de telefono de cuenta Lime con extension de pais (Ej: +34):\n','type':'number','value':'','key':'phone'}], sections=None)
	#phone = window['phone']
	phone = dialogs.input_alert('Phome Number','Introduzca su numero de telefono de cuenta Lime con extension de pais (Ej: +34):', '+34', 'OK', hide_cancel_button=False)
	if not phone.startswith('+'): phone = '+' + phone #Miramos que tenga el + delante
	phone = phone.replace(' ', '') #Quitamos los espacios en blanco
	
	d = requests.get("https://web-production.lime.bike/api/rider/v1/login", data={"phone": phone})
	#print(d.text)
	
	#window = dialogos.form_dialog(title='Lime Code', fields=[{'title':'Introduzca codigo recibido:','type':'number','value':'','key':'code'}], sections=None)
	#code = window['code']
	code = dialogs.input_alert('Lime Code', 'Introduzca codigo recibido:', '', 'OK', hide_cancel_button=True)
	url = 'https://web-production.lime.bike/api/rider/v1/login'
	datos = {"login_code": code, "phone": phone}
	r = requests.post(url, data=datos)
	data = r.text
	print(data)
	with open(fil+'/data/cookie.dat', 'wb') as f:
		pickle.dump(r.cookies, f)
		
	h_lime = json.loads(data)
	with open(fil+'/data/token.dat', 'w') as f:
		f.write(h_lime['token'])
			
def getLimes(coords, listaFinal = []):
	c_lat,c_lon = coords['centerCoords']
	u_lat,u_lon = coords['userCoords']
	if not logged:
		loginLime()
			
	cookies = None
	with open(fil+'/data/cookie.dat', 'rb') as f:
		cookies = pickle.load(f)
	with open(fil+'/data/token.dat', 'r') as f:
		token = f.read()
		
	header = {'authorization': 'Bearer ' + token}
	#print('header:', header)
	rdatos = {'map_center_latitude':c_lat,'map_center_longitude':c_lon,'user_latitude':u_lat,'user_longitude':u_lon}
	r = requests.get('https://web-production.lime.bike/api/rider/v1/views/main', data=rdatos,
	cookies=cookies, headers=header) #r.cookies
	try:
		l_lime = json.loads(r.text)
	except:
		loginLime()
		r = getLimes(coords, listaFinal)
		return r
		
	#print(l_lime)
	for patinetes in l_lime['data']['attributes']['nearby_locked_bikes']:
		carga = patinetes['attributes']['battery_level']
		n_carga = 0
		if carga == 'high':
			n_carga = 100
		if carga == 'med':
			n_carga = 50
		if carga == 'low':
			n_carga = 10
		dist = float(patinetes['attributes']['meter_range'])/1000
		elem = {'serv': 'Lime', 'id': patinetes['id'], 'lat': patinetes['attributes']['latitude'], 'lon': patinetes['attributes']['longitude'],
		'ca': n_carga, 'info': 'Km restantes %2.2f' %dist, 'url': 'LimeBike://'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal
	
##----------Mobike--------------------
def getMobikes(coords, listaFinal = []):
	c_lat,c_lon = coords['centerCoords']
	header = {'content-type': 'application/x-www-form-urlencoded', 'platform': 1}
	datos = {'latitude': c_lat, 'longitude': c_lon}
	url = 'https://app.mobike.com/api/nearby/v4/nearbyBikeInfo'
	d = requests.post(url, data=datos, headers=header)
	data = d.text
	l_mobike = json.loads(data)
	print(l_mobike)
	for bicis in l_mobike['object']:
		elem = {'serv': 'Mobike', 'id': bicis['bikeIds'], 'lat': bicis['distY'], 'lon': bicis['distX'], 'ca': -1, 'info': 'No additional info', 'url': 'mobike://'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal

##----------TIER--------------------
def getTiers(coords, listaFinal = []):
	lat2, lon2, lat1, lon1 = coords['mapBounds']
	rdatos = {'lat1':lat1,'lat12':lat2,'lon1':lon1,'lon1':lon1}
	r = requests.get('https://tier.frontend.fleetbird.eu/api/prod/v1.06/map/cars', data=rdatos)
	l_tier = json.loads(r.text)
	for patin in l_tier:
		elem = {'serv': 'TIER','id': patin['carId'], 'lat': patin['lat'], 'lon': patin['lon'], 'ca':  patin['fuelLevel'], 'info': 'Licencia: %s' %patin['licencePlate'], 'url': 'https://itunes.apple.com/es/app/tier/id1436140272?l=en&mt=8'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal

##----------VOI--------------------
def getVois(coords, listaFinal = []):
	c_lat,c_lon = coords['centerCoords']
	rdatos = {'la':c_lat,'lo':c_lon}
	r = requests.get('https://api.voiapp.io/v1/vehicle/status/ready', data=rdatos)
	l_voi = json.loads(r.text)
	for patin in l_voi:
		elem = {'serv': 'VOI','id': patin['id'], 'lat': patin['location'][0], 'lon': patin['location'][1], 'ca':  patin['battery'], 'info': '', 'url': 'https://itunes.apple.com/es/app/voi-ride-the-future/id1395921017?mt=8'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal


##----------ERG--------------------
def getErgs(coords, listaFinal = []):
	c_lat,c_lon = coords['centerCoords']
	rdatos = {'latitude':c_lat,'longitude':c_lon, 'agent':'E-cycling', 'kind':2}
	r = requests.get('http://gbike-api.gonbike.com.cn/bikes', data=rdatos)
	l_erg = json.loads(r.text)
	for patin in l_erg:
		elem = {'serv': 'ERG','id': patin['id'], 'lat': patin['location'][0], 'lon': patin['location'][1], 'ca':  patin['battery'], 'info': '', 'url': 'https://itunes.apple.com/es/app/voi-ride-the-future/id1395921017?mt=8'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal

##-----------UFO-------------------
def getUfos(coords, listaFinal = []):
	lat2, lon2, lat1, lon1 = coords['mapBounds']
	rdatos = {'lat1':lat1,'lat12':lat2,'lon1':lon1,'lon1':lon1}
	r = requests.get('https://ufo.frontend.fleetbird.eu/api/prod/v1.06/map/cars/', data=rdatos)
	l_ufo = json.loads(r.text)
	for patin in l_ufo:
		elem = {'serv': 'TIER','id': patin['carId'], 'lat': patin['lat'], 'lon': patin['lon'], 'ca':  patin['fuelLevel'], 'info': 'Licencia: %s' %patin['licencePlate'], 'url': 'https://itunes.apple.com/es/app/tier/id1436140272?l=en&mt=8'}
		if not elem in listaFinal:
			listaFinal.append(elem)
	return listaFinal

if __name__ == '__main__':
	## Zaragoza coords
	lat = str(41.6480576)
	lon = str(-0.8837416)
	## Modelo datos coordenadas
	coordsData = {'centerCoords': [lat, lon], 'userCoords': [lat, lon], 'mapBounds': ['41.6582','-0.8584', '41.6462', '-0.9407']}
	print(getMuvings(coordsData))
	print(getLimes(coordsData))
	print(getMobikes(coordsData))
	print(getTiers(coordsData))
	print(getVois(coordsData))
	print(getErgs(coordsData))
	print(getUfos(coordsData))

