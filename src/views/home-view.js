import { LitElement, css, html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import { baseStyles } from '../styles/base-styles.js'; // styles
import { aboutStyles } from '../styles/about-styles.js'; 

class HomeView extends LitElement{
  static get styles() {
    return [ baseStyles, aboutStyles ]
  }
  static get properties() {
    return {
      darkMode: {type: Boolean},
      title: { type: String },
      introduction: { type: String },
      technologies: { type: Array},
    }
  }

  constructor() {
    super();
    this.darkMode = true;
    this.title = "";
    this.introduction = "";
    this.technologies = [];
    // Test code here below -- messing with dark theme styles -- work in progress
    this.styles;
    this.lightstyles = { color: "black", background: "white"};
    this.darkStyles = { color: "white", background:"black" };

    if (this.darkMode) {
      this.styles = this.lightstyles;  // wtf why doesn't this work??
    }else{
      this.styles = this.darkStyles;
    }
  }

  render() {
    return html `
      <style>
        #homeContainer {
          color: "green";
        }
      </style>
      <h1><%= htmlWebpackPlugin.options.title %></h1>
      <div style=${styleMap(this.styles)} id="homeContainer">
          <h2>${this.title}</h2>
          <p>${this.introduction}</p>
          <h3>Current Web Technologies included</h3>
          <ul>
            ${ this.technologies.map( i => (
              html`<li>${i}</li>`
              ))}
          </ul>
      </div>
      <button @click=${event => {
        console.log("pressed me")
        
      }}></button> 
      `
  }

  firstUpdated(){  // Lit-html Lifecycle (Component mounted)
    this.fetchAboutData();
    this.styles = this.darkStyles;
  }

  fetchAboutData() { // get inital state from json file
    try {
      fetch('./data/home.json')
      .then(response => response.json())
      .then(data => {
        this.title = data.title;
        this.introduction = data.introduction;
        this.technologies = data.technologies;
      }) 
    } catch (e) { 
      console.log(e); 
    } 
    
  }
}

customElements.define('home-view', HomeView);