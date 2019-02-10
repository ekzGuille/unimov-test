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
import { UserSettingsProvider } from "../../providers/user-settings/user-settings";
import { UserPreferences } from "../../models/user-preferences";

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
    public transportServiceProvider: TransportServiceProvider,
    public userSettingsProvider: UserSettingsProvider
  ) {}

  userPref: UserPreferences;

  mobikeResponse: MobikeResponse;
  arrayMobike: MobikeObject[];

  muvingResposne: MuvingResponse;
  arrayMuving: MuvingObject[];

  tierResponse: TierResponse;
  arrayTier: TierObject[];

  voiResponse: VoiResponse;
  arrayVoi: VoiObject[];

  ufoResponse: UfoResponse;
  arrayUfo: UfoObject[];

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
  iconoUfo1: string;
  iconoUfo2: string;
  iconoErg1: string;
  iconoErg2: string;

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

  mapExtentLonLatCoords: number[][];
  mapExtentLatLonCoords: number[][];
  ubicacionLonLat: number[];
  ubicacionLatLon: number[];

  ngOnInit() {
    this.featuresMobike = [];
    this.featuresMuving = [];
    this.featuresTier = [];
    this.featuresVoi = [];
    this.featuresUfo = [];
    this.featuresErg = [];

    this.userPref = this.userSettingsProvider.getUserPreferences();

    this.mapUtil = new MapCal();

    this.featuresMobike = [];
    this.featuresMuving = [];
    this.featuresTier = [];
    this.featuresVoi = [];

    this.ubicacionLonLat = [];
    this.ubicacionLatLon = [];
    this.mapExtentLonLatCoords = [];
    this.mapExtentLatLonCoords = [];
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
    this.iconoKoko = "assets/transport/koko.png";
    this.iconoLime1 = "assets/transport/lime.png";
    this.iconoLime2 = "assets/transport/lime2.png";
    this.iconoLime3 = "assets/transport/lime_g.png";
    this.iconoMobike1 = "assets/transport/mobike.png";
    this.iconoMobike2 = "assets/transport/mobike2.png";
    this.iconoMuving1 = "assets/transport/muving.png";
    this.iconoMuving2 = "assets/transport/muving2.png";
    this.iconoVoi = "assets/transport/voi.png";
    this.iconoTier = "assets/transport/tier.png";
    this.iconoUfo1 = "assets/transport/ufo1.png";
    this.iconoUfo2 = "assets/transport/ufo2.png";
    this.iconoErg1 = "assets/transport/erg1.png";
    this.iconoErg2 = "assets/transport/erg2.png";

    // this.iconoKoko = "https://i.imgur.com/3RWKl3T.png";
    // this.iconoLime1 = "https://i.imgur.com/JwxvwNB.png";
    // this.iconoLime2 = "https://i.imgur.com/i52ia57.png";
    // this.iconoLime3 = "https://i.imgur.com/QiLhsNm.png";
    // this.iconoMobike1 = "https://i.imgur.com/M38oXRm.png";
    // this.iconoMobike2 = "https://i.imgur.com/G0DCXFS.png";
    // this.iconoMuving1 = "https://i.imgur.com/CyXXWjI.png";
    // this.iconoMuving2 = "https://i.imgur.com/c0TDKRc.png";
    // this.iconoVoi = "https://i.imgur.com/IiEd9iB.png";
    // this.iconoTier = "https://i.imgur.com/PeQHAcq.png";
    // this.iconoUfo1 = "https://i.imgur.com/Egzv6rM.png";
    // this.iconoUfo2 = "https://i.imgur.com/lCt3clS.png";
    // this.iconoErg1 = "https://i.imgur.com/xfUJ0Va.png";
    // this.iconoErg2 = "https://i.imgur.com/KLRUxZ7.png";

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

  }

  ionViewWillEnter() {
    this.userPref = this.userSettingsProvider.getUserPreferences();
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

  //Utils

  getUserLocation(): void {}

  getMapExtentCoords(): void {
    let extentXYCoords: number[][] = [];
    let _extCoords = this.map.getView().calculateExtent();
    extentXYCoords = [
      [_extCoords[0], _extCoords[1]],
      [_extCoords[2], _extCoords[3]]
    ];

    //Coordenadas menor indice 0
    this.mapExtentLonLatCoords[0] = transform(
      extentXYCoords[1],
      "EPSG:3857",
      "EPSG:4326"
    );
    this.mapExtentLonLatCoords[1] = transform(
      extentXYCoords[0],
      "EPSG:3857",
      "EPSG:4326"
    );

    this.mapExtentLatLonCoords[0] = [
      this.mapExtentLonLatCoords[0][1],
      this.mapExtentLonLatCoords[0][0]
    ];
    this.mapExtentLatLonCoords[1] = [
      this.mapExtentLonLatCoords[1][1],
      this.mapExtentLonLatCoords[1][0]
    ];
  }

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
        this.getMapExtentCoords();
        this.obtenerRecursos(this.ubicacionLatLon, this.mapExtentLatLonCoords);
      })
      .catch(error => {
        //Localizar por IP
        this.http.get<Location>("https://ipapi.co/json").subscribe(res => {
          this.ubicacionLonLat = [res.longitude, res.latitude];
          this.ubicacionLatLon = [res.latitude, res.longitude];
          this.actualizarMapa();
          this.getMapExtentCoords();
          this.obtenerRecursos(
            this.ubicacionLatLon,
            this.mapExtentLatLonCoords
          );
        });
      });
  }

  obtenerRecursos(ubicacion: number[], coordenadasRec: number[][]): void {
    if (this.userPref.selMobike) this.getMobike(ubicacion);

    if (this.userPref.selMuving) this.getMuving(coordenadasRec);

    if (this.userPref.selTier) this.getTier(coordenadasRec);

    if (this.userPref.selVoi) this.getVoi(ubicacion);

    if (this.userPref.selUfo) this.getUfo(coordenadasRec);

    if (this.userPref.selErg) this.getErg(ubicacion);
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
