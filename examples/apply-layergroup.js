import 'https://petapedia.github.io/ol/v7.3.0/ol.css';
import {Group as LayerGroup} from 'https://petapedia.github.io/ol/v7.3.0/layer.js';
import {Map, View} from 'ol';
import {apply} from 'ol-mapbox-style';

const layerGroup = new LayerGroup();
apply(layerGroup, 'data/geojson-wms.json');

new Map({
  target: 'map',
  view: new View({
    center: [-10203186.115192635, 4475744.563386],
    zoom: 4,
  }),
  layers: [layerGroup],
});
