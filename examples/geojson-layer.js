import 'https://petapedia.github.io/ol/v7.3.0/ol.css';
import VectorLayer from 'https://petapedia.github.io/ol/v7.3.0/layer/Vector.js';
import {Map, View} from 'ol';
import {applyStyle} from 'ol-mapbox-style';
import {fromLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';

const layer = new VectorLayer();
applyStyle(layer, 'data/geojson.json');
new Map({
  target: 'map',
  layers: [layer],
  view: new View({
    center: fromLonLat([-122.19952899999998, 51.920367528011525]),
    zoom: 3,
  }),
});
