import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { TransportServiceProvider } from '../../providers/transport-service/transport-service';

import { MapCal } from './mapCal'

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Tile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

import { transform } from 'ol/proj';
import { MuvingResponse } from '../../models/muving/muvingResponse';
import { TierResponse } from '../../models/tier/tierResponse';
import { VoiResponse } from '../../models/voi/voiResponse';
import { MuvingObject } from '../../models/muving/muvingObject';
import { TierObject } from '../../models/tier/tierObject';
import { VoiObject } from '../../models/voi/voiObject';
import { Location } from '../../models/location'
import { MobikeResponse } from '../../models/mobike/mobikeResponse';
import { MobikeObject } from '../../models/mobike/mobikeObject';

// @IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class BMapPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private geolocation: Geolocation,
    public toastCtrl: ToastController,
    public transportServiceProvider: TransportServiceProvider) {
  }

  mobikeResponse: MobikeResponse;
  arrayMobike: MobikeObject[];
  
  muvingResposne: MuvingResponse;
  arrayMuving: MuvingObject[];
  
  tierResponse: TierResponse;
  arrayTier: TierObject[];
  
  voiResponse: VoiResponse;
  arrayVoi: VoiObject[];
  

  map: Map;
  overlay: Overlay;
  view: View;
  point: Point;
  tileLayer: Tile;
  vectorLayerRestaurantes: VectorLayer;

  calculosMapa: MapCal;

  distancia: number = 0;
  ubicacion: number[] = [];
  locRestaurante: number[] = [];
  centroMapa: number[] = [];

  imagenRGenerica: string;
  iconoRGenerico: string;

  featuresMobike: Feature[] = [];
  featuresMuving: Feature[] = [];
  featuresTier: Feature[] = [];
  featuresVoi: Feature[] = [];

  zoom: number;

  urlWebZgz: string;

  iconoGMaps: string;
  iconoUbicacion: string;
  iconoAnimadoUbicacion: string;
  iconoCasa: string;

  iconoKoko: string;
  iconoLime1: string;
  iconoLime2: string;
  iconoLime3: string;
  iconoMobike1: string;
  iconoMobike2: string;
  iconoMuving1: string;
  iconoMuving2: string;
  iconoVoi: string;
  iconoTier: string;

  ngOnInit() {

    this.calculosMapa = new MapCal();

    this.zoom = 13;
    //Default pointer position
    this.centroMapa = transform([-0.889159, 41.648715], 'EPSG:4326', 'EPSG:3857')

    //Default icons
    this.iconoGMaps = 'http://www.clker.com/cliparts/J/U/K/G/l/9/google-maps-marker-for-residencelamontagne.svg.hi.png';
    this.iconoUbicacion = 'http://www.inside360.fr/wp-content/uploads/2014/10/home_address-icon.png';
    this.iconoAnimadoUbicacion = 'http://www.insoldelbajio.com/wp-content/uploads/2014/05/location-1.gif';
    this.iconoCasa = 'https://cdn1.iconfinder.com/data/icons/real-estate-set-1-3/64/real-estate_1-10-512.png';

    //Services icons
    this.iconoKoko = 'https://i.imgur.com/3RWKl3T.png';
    this.iconoLime1 = 'https://i.imgur.com/JwxvwNB.png';
    this.iconoLime2 = 'https://i.imgur.com/i52ia57.png';
    this.iconoLime3 = 'https://i.imgur.com/QiLhsNm.png';
    this.iconoMobike1 = 'https://i.imgur.com/M38oXRm.png';
    this.iconoMobike2 = 'https://i.imgur.com/G0DCXFS.png';
    this.iconoMuving1 = 'https://i.imgur.com/CyXXWjI.png';
    this.iconoMuving2 = 'https://i.imgur.com/c0TDKRc.png';
    this.iconoVoi = 'https://i.imgur.com/IiEd9iB.png';
    this.iconoTier = 'https://i.imgur.com/PeQHAcq.png';


    this.tileLayer = new Tile({
      source: new XYZ({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      })
    });

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer],
      view: new View({
        center: this.centroMapa,
        minZoom: 10,
        control: null,
        zoom: this.zoom
      })
    });
  }

  addMovingMapa(): void {
    let view: View = this.map.getView();
    this.zoom = 13;
    view.setZoom(this.zoom);
    view.setCenter(this.centroMapa);

    this.vectorLayerRestaurantes = new VectorLayer({
      source: new VectorSource({
        features: this.featuresMobike
      })
    });

    let container = document.getElementById('popup');
    let closer = document.getElementById('popup-closer');

    this.overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });

    closer.onclick = () => {
      this.zoom = 14;
      view.animate({
        zoom: this.zoom,
        duration: 500
      });
      this.overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    this.map.addOverlay(this.overlay);

    this.map.on('click', (evt: any) => {
      let restaurante = this.map.forEachFeatureAtPixel(evt.pixel, (feature: any) => {
        return feature;
      });

      if (restaurante && restaurante.getGeometry().getType() === "Point" && restaurante.get('type') == 'restaurante') {
        let coordinates = restaurante.getGeometry().getCoordinates();
        this.overlay.setPosition(coordinates);
        // this.infoRestaurante = restaurante.get('infoRestaurante');
        // let coords = transform(this.infoRestaurante.geometry.coordinates, 'EPSG:4326', 'EPSG:3857');
        // let newCoords = [coords[0] + 200, coords[1] + 100];
        this.zoom = 16;
        // view.animate({
        //   center: newCoords,
        //   zoom: this.zoom,
        //   duration: 500
        // });
        // view.setCenter(newCoords);
        // view.setZoom(this.zoom);
      }
    });

    this.map.addLayer(this.vectorLayerRestaurantes);
  }

  cargarMuving(coordsRectangle: number[][]): void {
    this.arrayMuving = [];
    this.featuresMobike = [];

    if (this.vectorLayerRestaurantes !== undefined) {
      this.vectorLayerRestaurantes.getSources().clear();
    }

    this.transportServiceProvider.getMuving(coordsRectangle)
      .subscribe(res => {
        if (res.responseCode === "0") {
          res.object.forEach(muving => {
            console.log(muving);
          });
        }
      });

    // this.restaurantInfoProviderReq.getNRestaurant(amount)
    //   .subscribe(res => {
    //     res.result.forEach(restaurante => {
    //       restaurante.image = restaurante.image === undefined ? this.imagenRGenerica : this.urlWebZgz + restaurante.image;
    //       restaurante.logo = restaurante.logo === undefined ? this.iconoRGenerico : this.urlWebZgz + restaurante.logo;
    //       this.arrRestaurantes.push(restaurante);
    //     })

    //     this.arrRestaurantes.forEach((restaurante: Restaurant) => {
    //       this.featuresMobike.push(this.dibujarMuving(restaurante));
    //     });
    //     this.addMovingMapa();
    //   });
  }

  dibujarMuving(muvingObject: MuvingObject): Feature {
    // if (restaurante.geometry) {
    //   this.locRestaurante = transform(restaurante.geometry.coordinates, 'EPSG:4326', 'EPSG:3857');
    // } else {
    //   return new Feature();
    // }

    // let restaurantIcon = new Style({
    //   image: new Icon({
    //     anchor: [0.5, 0.7],
    //     anchorXUnits: 'fraction',
    //     anchorYUnits: 'fraction',
    //     scale: 0.3,
    //     src: restaurante.logo
    //   })
    // });

    // let feature = new Feature({
    //   geometry: new Point(this.locRestaurante),
    //   type: 'restaurante',
    //   infoRestaurante: restaurante
    // });
    // feature.setStyle(restaurantIcon);

    // return feature;

  }

  dibujarUbicacion(coords: number[]) {

    let view: View = this.map.getView();
    this.zoom = 18;
    view.setZoom(this.zoom);
    view.setCenter(coords);

    let estiloPointer = new Style({
      image: new Icon({
        anchor: [0.5, 0.7],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.05,
        src: this.iconoGMaps
      })
    });

    let feature = new Feature({
      geometry: new Point(coords)
    });

    let vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
    });

    feature.setStyle(estiloPointer);
    this.map.addLayer(vectorLayer);
  }

  actualizarMapa(): void {
    if (this.ubicacion.length > 0) {
      this.ubicacion = transform(this.ubicacion, 'EPSG:4326', 'EPSG:3857');
      this.dibujarUbicacion(this.ubicacion);

      let view = this.map.getView();

      if (this.locRestaurante.length > 0) {
        view.setCenter(this.calculosMapa.midCoords(this.ubicacion, this.locRestaurante));
        let distancia = this.cacularDistancia(this.ubicacion, this.locRestaurante);
        this.zoom = this.calculosMapa.mapping(distancia, 0, 10, 16, 1);
      } else {
        this.zoom = 16;
      }
      view.setZoom(this.zoom);
    }
  }

  localizarUsuario(): void {
    if (this.ubicacion.length === 0) {
      this.mostrarToast();
    }
    this.geolocation.getCurrentPosition().then((res) => {
      this.ubicacion = [res.coords.longitude, res.coords.latitude];
      this.actualizarMapa();
    }).catch((error) => {
      //Localizar por IP
      this.http.get<Location>('https://ipapi.co/json')
        .subscribe(res => {
          this.ubicacion = [res.longitude, res.latitude];
          this.actualizarMapa();
        });
    });
  }

  mostrarToast(): void {
    const toast = this.toastCtrl.create({
      message: 'Obteniendo ubicación',
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  cacularDistancia(coords1: number[], coords2: number[]): number {
    coords1 = transform(coords1, 'EPSG:3857', 'EPSG:4326');
    coords2 = transform(coords2, 'EPSG:3857', 'EPSG:4326');
    return this.calculosMapa.distance2Points(coords1, coords2);
  }

}

