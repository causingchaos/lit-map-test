import { html, LitElement } from 'lit-element';
import './esri-map.js'

class AppView extends LitElement{
  
  static get properties() {
    return {
      location: { type: Object },
      city: { type: String }
    }
  }
  
  constructor() {
    super();
    // set fallback location to seattle -- GET will pull in coordinates for Toronto
    this.location = { lat: "47.608013", long: "-122.335167" }
    this.city = "Seattle"
  }

  render() {
    return html`
    <style>
      #app-container{
        width: 100%,;
        height: 100%;
        display: flex;
      }
      #map-container{
        flex-grow: 1;
        height: 800px;
      }
    </style>
    <button @click=${ (event) => this.updateLocation() }
    >Set to Toronto
    </button>
    <div id="app-container">
      <div id="map-container">
        <esri-map 
          .location=${this.location}
          .city=${this.city}  
        >
        </esri-map>
      </div>
    </div>
    `;
  }

  updateLocation(){
    var oldLocation = this.location;  
    this.location = { lat: "43.651070", long: "-79.347015"} // Set to Toronto
    this.city = "Toronto";  // Set to Toronto
    console.log("New location is: " + this.city)
    console.log("Coordinates: ");
    console.log(this.location);
  }

}

customElements.define('app-view', AppView);