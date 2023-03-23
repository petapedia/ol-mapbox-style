import 'https://petapedia.github.io/ol/v7.3.0/ol.css';
import GeoJsonFormat from 'https://petapedia.github.io/ol/v7.3.0/format/GeoJSON.js';
import Map from 'https://petapedia.github.io/ol/v7.3.0/Map.js';
import VectorLayer from 'https://petapedia.github.io/ol/v7.3.0/layer/Vector.js';
import VectorSource from 'https://petapedia.github.io/ol/v7.3.0/source/Vector.js';
import View from 'https://petapedia.github.io/ol/v7.3.0/View.js';

import {stylefunction} from 'ol-mapbox-style';

const layer = new VectorLayer({
  declutter: true,
  source: new VectorSource({
    format: new GeoJsonFormat(),
    url: 'data/states.geojson',
  }),
});

const map = new Map({
  target: 'map',
  view: new View({
    center: [-13603186.115192635, 6785744.563386],
    zoom: 2,
  }),
});

fetch('data/states.json')
  .then((r) => r.json())
  .then((glStyle) => {
    stylefunction(layer, glStyle, 'states');
    if (map.getLayers().getArray().indexOf(layer) === -1) {
      map.addLayer(layer);
    }
  });
