import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Tile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Draw from 'ol/interaction/Draw';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

import { transform } from 'ol/proj';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  constructor(public navCtrl: NavController) {
  }

  iconFeature: Feature;
  iconStyle: Style;
  map: Map;
  mapSource: XYZ;
  overlay: Overlay;
  view: View;
  point: Point;
  tileLayer: Tile;
  vectorLayerMap: VectorLayer;
  vectorSourceMap: VectorSource;
  dibujoUsuario: Draw;
  layerZonas: VectorLayer;
  layerCasa: VectorLayer;
  layerCirculo: VectorLayer;
  layerAreaSeleccionada: VectorLayer;
  vectorDraw: VectorLayer;
  vectorSourceDraw: VectorSource;

  distancia: number = 0;
  locCasa: number[][] = [];
  ubicacion: number[][] = [];
  centro: number[][] = [];

  features: Feature[] = [];

  zonaNumero: string[];
  coordenadasNumZonasZaragoza: number[][];
  coordenadasNumZonasTeruel: number[][];

  isDibujoActivo: boolean;
  isMosrZonas: boolean;
  isCasaActivo: boolean;

  iconoGMaps: string;
  iconoUbicacion: string;
  iconoCasa: string;

  ngOnInit() {
    this.locCasa = transform([-0.877520, 41.665714], 'EPSG:4326', 'EPSG:3857');
    this.ubicacion = this.locCasa;
    this.centro = this.ubicacion;
    this.iconoGMaps = 'http://www.clker.com/cliparts/J/U/K/G/l/9/google-maps-marker-for-residencelamontagne.svg.hi.png';
    this.iconoUbicacion = 'http://www.inside360.fr/wp-content/uploads/2014/10/home_address-icon.png';
    this.iconoCasa = 'https://cdn1.iconfinder.com/data/icons/real-estate-set-1-3/64/real-estate_1-10-512.png';

    this.isDibujoActivo = false;
    this.isMosrZonas = false;
    this.isCasaActivo = false;

    this.vectorSourceDraw = new VectorSource({
      wrapX: false
    });
    this.vectorDraw = new VectorLayer({
      source: this.vectorSourceDraw
    })

    this.iconFeature = new Feature({
      geometry: new Point(this.ubicacion)
    });

    this.iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.05,
        src: this.iconoGMaps
      })
    });

    this.iconFeature.setStyle(this.iconStyle);

    this.vectorSourceMap = new VectorSource({
      features: [this.iconFeature]
    });

    this.vectorLayerMap = new VectorLayer({
      source: this.vectorSourceMap
    });

    this.tileLayer = new Tile({
      source: new XYZ({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      })
    });

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer, this.vectorLayerMap],
      view: new View({
        center: this.centro,
        zoom: 13
      })
    });
  }

  dibujarPunto(coords: number[]) {

    let longitud = coords[0];
    let latitud = coords[1];

    let iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 0.7],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.05,
        src: this.iconoCasa
      })
    });

    let iconFeature = new Feature({
      geometry: new Point(transform([longitud, latitud], 'EPSG:4326', 'EPSG:3857')),
    });

    let vectorPoint = new VectorLayer({
      source: new VectorSource({
        features: [iconFeature]
      })
    });


    iconFeature.setStyle(iconStyle);
    this.map.addLayer(vectorPoint);
  }

}
