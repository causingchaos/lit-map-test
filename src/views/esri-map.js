import { html, LitElement } from 'lit-element';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';

class EsriMap extends LitElement{
  static get properties() {
    return {
      location: { type: Object }, // prop passed from parent
      city: { type: String } // prop passed from parent
    }
  }

  render() {
    return html`
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"/>
    <style>
      #map{
        height: 100%;
        width: 100%;
      }
    </style>
    <h2>Current City: ${this.city} </h2>
    <h3>Coordinates: Lat: ${this.location.lat}</h3>
    <div id="map"></div>
    `
  }

  firstUpdated() {
    const mapNode = this.shadowRoot.querySelector('#map');
    
    // Render map with props from parent component
    var map = L.map(mapNode, {
      maxZoom: 18,
      minZoom: 2,
    }).setView([this.location.lat, this.location.long],8); // [Lat,Lng]
    const esriLayer = esri.basemapLayer('Streets');
    map.addLayer(esriLayer);

    // Render circle with props from parent component
    var circle = L.circle([this.location.lat, this.location.long], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 20000,
    }).addTo(map);
  }

}

customElements.define('esri-map', EsriMap);