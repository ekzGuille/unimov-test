import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Geolocation } from "@ionic-native/geolocation";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

import { TransportServiceProvider } from "../../providers/transport-service/transport-service";

import { MobikeResponse } from "../../models/mobike/mobikeResponse";
import { MobikeObject } from "../../models/mobike/mobikeObject";
import { MuvingResponse } from "../../models/muving/muvingResponse";
import { MuvingObject } from "../../models/muving/muvingObject";
import { TierResponse } from "../../models/tier/tierResponse";
import { TierObject } from "../../models/tier/tierObject";
import { VoiResponse } from "../../models/voi/voiResponse";
import { VoiObject } from "../../models/voi/voiObject";
import { UfoObject } from "../../models/ufo/ufoObject";
import { UfoResponse } from "../../models/ufo/ufoResponse";
import { ErgObject } from "../../models/erg/ergObject";
import { ErgResponse } from "../../models/erg/ergResponse";

import { MapCal } from "./mapCal";

import { Location } from "../../models/location";

import { transform } from "ol/proj";

import Feature from "ol/Feature";
import Map from "ol/Map";
import XYZ from "ol/source/XYZ";
import Overlay from "ol/Overlay";
import View from "ol/View";
import Point from "ol/geom/Point";
import Tile from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Icon from "ol/style/Icon";
import Style from "ol/style/Style";

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private geolocation: Geolocation,
    public toastCtrl: ToastController,
    public transportServiceProvider: TransportServiceProvider
  ) {}

  selMobike: boolean;
  mobikeResponse: MobikeResponse;
  arrayMobike: MobikeObject[];

  selMuving: boolean;
  muvingResposne: MuvingResponse;
  arrayMuving: MuvingObject[];

  selTier: boolean;
  tierResponse: TierResponse;
  arrayTier: TierObject[];

  selVoi: boolean;
  voiResponse: VoiResponse;
  arrayVoi: VoiObject[];

  selUfo: boolean;
  ufoResponse: UfoResponse;
  arrayUfo: UfoObject[];

  selErg: boolean;
  ergResponse: ErgResponse;
  arrayErg: ErgObject[];

  featuresMobike: Feature[];
  featuresMuving: Feature[];
  featuresTier: Feature[];
  featuresVoi: Feature[];
  featuresUfo: Feature[];
  featuresErg: Feature[];

  featuresMapa: Feature[];

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

  iconoUbicacion: string;
  iconoAnimadoUbicacion: string;

  centroMapa: number[] = [];

  zoom: number;

  map: Map;
  // overlay: Overlay;
  // view: View;
  // point: Point;
  // tileLayer: Tile;
  // vectorLayer: VectorLayer;

  mapUtil: MapCal;

  coordenadasExtent: number[][];
  ubicacionLonLat: number[];
  ubicacionLatLon: number[];

  ngOnInit() {
    this.featuresMobike = [];
    this.featuresMuving = [];
    this.featuresTier = [];
    this.featuresVoi = [];
    this.featuresUfo = [];
    this.featuresErg = [];

    this.selMobike = false;
    this.selMuving = false;
    this.selTier = false;
    this.selVoi = true;
    this.selUfo = false;
    this.selErg = false;

    this.mapUtil = new MapCal();

    this.featuresMobike = [];
    this.featuresMuving = [];
    this.featuresTier = [];
    this.featuresVoi = [];

    this.ubicacionLonLat = [];
    this.ubicacionLatLon = [];
    this.coordenadasExtent = [];
    this.zoom = 13;

    //Default pointer position
    this.centroMapa = transform(
      [-0.889159, 41.648715],
      "EPSG:4326",
      "EPSG:3857"
    );

    //Default icons
    // this.iconoGMaps = 'http://www.clker.com/cliparts/J/U/K/G/l/9/google-maps-marker-for-residencelamontagne.svg.hi.png';
    this.iconoUbicacion =
      "http://www.inside360.fr/wp-content/uploads/2014/10/home_address-icon.png";
    this.iconoAnimadoUbicacion =
      "http://www.insoldelbajio.com/wp-content/uploads/2014/05/location-1.gif";
    // this.iconoCasa = 'https://cdn1.iconfinder.com/data/icons/real-estate-set-1-3/64/real-estate_1-10-512.png';

    //Services icons
    this.iconoKoko = "https://i.imgur.com/3RWKl3T.png";
    this.iconoLime1 = "https://i.imgur.com/JwxvwNB.png";
    this.iconoLime2 = "https://i.imgur.com/i52ia57.png";
    this.iconoLime3 = "https://i.imgur.com/QiLhsNm.png";
    this.iconoMobike1 = "https://i.imgur.com/M38oXRm.png";
    this.iconoMobike2 = "https://i.imgur.com/G0DCXFS.png";
    this.iconoMuving1 = "https://i.imgur.com/CyXXWjI.png";
    this.iconoMuving2 = "https://i.imgur.com/c0TDKRc.png";
    this.iconoVoi = "https://i.imgur.com/IiEd9iB.png";
    this.iconoTier = "https://i.imgur.com/PeQHAcq.png";

    this.map = new Map({
      target: "map",
      layers: [
        new Tile({
          source: new XYZ({
            url: "http://tile.osm.org/{z}/{x}/{y}.png"
          })
        })
      ],
      view: new View({
        center: this.centroMapa,
        minZoom: 10,
        control: null,
        zoom: this.zoom
      })
    });

    this.localizarUsuario();
  }

  //Servicios

  getMobike(ubicacion: number[]): void {
    this.transportServiceProvider
      .getMobike(ubicacion)
      .subscribe(res => console.log(res));
  }

  getMuving(coordenadasRec: number[][]): void {
    this.transportServiceProvider
      .getMuving(coordenadasRec)
      .subscribe(res => console.log(res));
  }

  getTier(coordenadasRec: number[][]): void {
    this.transportServiceProvider
      .getTier(coordenadasRec)
      .subscribe(res => console.log(res));
  }

  getVoi(ubicacion: number[]): void {
    this.transportServiceProvider
      .getVoi(ubicacion)
      .subscribe(res => console.log(res));
  }

  getErg(ubicacion: number[]): void {
    this.transportServiceProvider
      .getErg(ubicacion)
      .subscribe(res => console.log(res));
  }

  getUfo(coordenadasRec: number[][]): void {
    this.transportServiceProvider
      .getUfo(coordenadasRec)
      .subscribe(res => console.log(res));
  }

  //Coordenadas de la vista actual
  //https://gis.stackexchange.com/questions/168590/getting-extent-in-openlayers-3

  //Utils

  getUserLocation(): void {}

  getMapExtentCoords(): void {}

  localizarUsuario(): void {
    if (this.ubicacionLonLat.length === 0 || this.ubicacionLatLon.length) {
      this.mostrarToast();
    }
    this.geolocation
      .getCurrentPosition()
      .then(res => {
        this.ubicacionLonLat = [res.coords.longitude, res.coords.latitude];
        this.ubicacionLatLon = [res.coords.latitude, res.coords.longitude];
        this.actualizarMapa();
        this.obtenerRecursos(this.ubicacionLatLon, []);
      })
      .catch(error => {
        //Localizar por IP
        this.http.get<Location>("https://ipapi.co/json").subscribe(res => {
          this.ubicacionLonLat = [res.longitude, res.latitude];
          this.ubicacionLatLon = [res.latitude, res.longitude];
          this.actualizarMapa();
          this.obtenerRecursos(this.ubicacionLatLon, []);
        });
      });
  }

  obtenerRecursos(ubicacion: number[], coordenadasRec: number[][]): void {
    if (this.selMobike) this.getMobike(ubicacion);

    if (this.selMuving) this.getMuving(coordenadasRec);

    if (this.selTier) this.getTier(coordenadasRec);

    if (this.selVoi) this.getVoi(ubicacion);

    if (this.selUfo) this.getUfo(coordenadasRec);

    if (this.selErg) this.getErg(ubicacion);
  }

  mostrarToast(): void {
    const toast = this.toastCtrl.create({
      message: "Obteniendo ubicación",
      duration: 1500,
      position: "top"
    });
    toast.present();
  }

  actualizarMapa(): void {
    console.log("Mapa actualizado");

    // if (this.ubicacion.length > 0) {
    //   this.ubicacion = transform(this.ubicacion, "EPSG:4326", "EPSG:3857");
    //   this.dibujarUbicacion(this.ubicacion);
    //   let view = this.map.getView();
    //   if (this.locRestaurante.length > 0) {
    //     view.setCenter(
    //       this.calculosMapa.midCoords(this.ubicacion, this.locRestaurante)
    //     );
    //     let distancia = this.cacularDistancia(
    //       this.ubicacion,
    //       this.locRestaurante
    //     );
    //     this.zoom = this.calculosMapa.mapping(distancia, 0, 10, 16, 1);
    //   } else {
    //     this.zoom = 16;
    //   }
    //   view.setZoom(this.zoom);
    // }
  }

  cacularDistancia(coords1: number[], coords2: number[]): number {
    coords1 = transform(coords1, "EPSG:3857", "EPSG:4326");
    coords2 = transform(coords2, "EPSG:3857", "EPSG:4326");
    return this.mapUtil.distance2Points(coords1, coords2);
  }
}
