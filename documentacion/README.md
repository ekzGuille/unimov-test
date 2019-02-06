# Muving:
Peticion GET a esta direccion:
https://nube000.muving.com/RestAPI/RestServices/vehicles/in_rectangle

data a pasar: lat1=41.6582&lon1=-0.8584&lat2=41.6462&lon2=-0.9407

lat, lon 1 son las coordenadas de la esquina superior derecha del rectangulo del mapa a mostrar.
lat, lon 2 son las coordenadas de la esquina inferior izquierda del rectangulo del mapa a mostrar.

Siguiendo el formato de como lo hace la propia empresa, el rectangulo del mapa a mostrar es uno q englobe zaragoza entera.

Respuesta del servidor:
Json
{…}
	object: (159) […]
		[0…99]
			0: {…}
				address: "Calle Rioja 296"
				charge: 46
				city: "Zaragoza"
				clean: false
				damageDescription: null
				damaged: false
				estimatedRange: 29900
				fuelCardPin: null
				hardwareId: null
				helmetDetectionSupported: false
				helmets: 2id: 116
				isClean: false
				isDamaged: false
				isHelmetDetectionSupported: false
				isRequestRunning: false
				lat: 41.657568
				lon: -0.908424
				requestRunning: false
				reservationStateId: 0
				stateId: 0typeId: 3
				vehicleRegistration: "2800JYL Scooter 125"
				zipCode: "50011"
				<prototype>: Object { … }
			length: 159
			<prototype>: Array []
		responseCode: 0
		<prototype>: Object { … }


# Koko:
Utiliza AWS Cognito lo cual hace muy dificil obtener el header para la llamada a la API:
Vease documentación específica.

# Lime:
https://github.com/ubahnverleih/WoBike/blob/master/Lime.md

# Mobike:
https://github.com/ubahnverleih/WoBike/blob/master/Mobike.md

# Tier:
Peticion GET a esta direccion:
https://tier.frontend.fleetbird.eu/api/prod/v1.06/map/cars

data a enviar: lat1=41.643822&lat2=41.680504&lon1=-0.908601&lon2=-0.883753

lat1; lon1 -> esquina inferior izq del mapa
lat2; lon2 -> esquina superior drch del mapa

OJO QUE VAN AL REVES DE MUVING

Respuesta:
[
    {
        "carId": 10329,
        "title": "",
        "lat": 41.650201,
        "lon": -0.888698,
        "licencePlate": "10329",
        "fuelLevel": 64,
        "vehicleStateId": 0,
        "vehicleTypeId": 6,
        "pricingTime": "0.15€/min",
        "pricingParking": "1€ to unlock",
        "reservationState": 0,
        "address": "Paseo María Agustín 9",
        "zipCode": "50004",
        "city": "Zaragoza",
        "locationId": 6
    },
    {
        "carId": 10330,
        "title": "",
        "lat": 41.649535,
        "lon": -0.899271,
        "licencePlate": "10330",
        "fuelLevel": 83,
        "vehicleStateId": 0,
        "vehicleTypeId": 6,
        "pricingTime": "0.15€/min",
        "pricingParking": "1€ to unlock",
        "reservationState": 0,
        "address": "Calle Vicente Berdusán 46",
        "zipCode": "50010",
        "city": "Zaragoza",
        "locationId": 6
    },

# VOI:
Peticion GET a esta direccion:
https://api.voiapp.io/v1/vehicle/status/ready

data a enviar: la=41.66233371023341&lo=-0.8962540399646083

la: latitud de la ubicación
lo: longitud de la ubicación

Respuesta:
[
    {
        "id": "7e1f07b6-9788-4bd7-8cb9-5d62c9e8e8f6",
        "short": "s9v3",
        "name": "VOI",
        "zone": 2,
        "type": "btv1",
        "status": "ready",
        "bounty": 600,
        "location": [
            38.69698203027241,
            -9.201561510583742
        ],
        "battery": 100,
        "locked": true,
        "updated": "2018-12-15T13:26:28.819066Z"
    },
    {
        "id": "3a02dabf-ad17-4d7f-a5a7-4d75b4743b8e",
        "short": "w3qs",
        "name": "VOI",
        "zone": 1,
        "type": "btv1",
        "status": "ready",
        "bounty": 7000,
        "location": [
            59.3196672569967,
            18.0684792118457
        ],
        "battery": 100,
        "locked": true,
        "updated": "2018-12-15T10:47:57.079011Z"
    },

VOI lista tambien los patinetes que estan siendo usados lo cual hay que filtrar para tener solo los aparcados  "locked"

# ERG (Bicis azules electricas):
Peticion GET: http://gbike-api.gonbike.com.cn/bikes
Data: agent=E-cycling&kind=2&latitude=41.66021999999999&longitude=-0.8973933333333333

Respuesta:
{
    "data": {
        "count": 64,
        "items": [
            {
                "code": "1230000022",
                "latitude": 41.660219999999988,
                "longitude": -0.89739333333333327,
                "powerBattery": 39,
                "isLocked": true,
                "kind": 2,
                "key": "7c80830ea8124465b505f7800dce8708",
                "lockCode": "2450cd0858e42eef",
                "color": "Red",
                "colorIcon": "",
                "name": "",
                "icon": "",
                "franchisee": "E-cycling",
                "price": {
                    "unitPrice": 0.8,
                    "unitInterval": 600
                },
                "electricKind": "Half"
            },
	    
# UFO:
Peticion GET: https://ufo.frontend.fleetbird.eu/api/prod/v1.06/map/cars/
Data: lat1=28.898125&lat2=50.662006&lon1=-10.344377&lon2=4.016251
respuesta:
[
    {
        "carId": 10329,
        "title": "",
        "lat": 41.650201,
        "lon": -0.888698,
        "licencePlate": "10329",
        "fuelLevel": 64,
        "vehicleStateId": 0,
        "vehicleTypeId": 6,
        "pricingTime": "0.15€/min",
        "pricingParking": "1€ to unlock",
        "reservationState": 0,
        "address": "Paseo María Agustín 9",
        "zipCode": "50004",
        "city": "Zaragoza",
        "locationId": 6
    },
    {
    
Tanto VOI como TIER listan los scooters de todo el mundo, eso hace que haya una cantidad ingente de vehiculos en el mapa, quiza es bueno filtrar.
