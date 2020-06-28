import { registerStyles} from '@vaadin/vaadin-themable-mixin/register-styles.js'
import { css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles('vaadin-app-layout', css `
  [part="navbar"] {
    background-color: lightgrey;
    font-size: 50px;
    padding-bottom: 10px;
  }[part="navbar"]::before{
    opacity: 0;
  }
  [part="navbar"][bottom]{ /* disable fucking bottom navbar on small screens */
    visibility: hidden;
  }
  [part="drawer"],                          /* adjusting the drawer background  && */ 
  :host([overlay]) [part="drawer"]::before{ /* for the drawer in overlay mode */
    background: lightgrey;
    padding-top: 129px;
    overflow: hidden;
  }
`);

export const navStyles = css`
<custom-style>
  <style include="lumo-typography lumo-color">
  :host([overlay]) [part='drawer']::before{
    background: black;
  }
  #drawer{
    background: black;
  }  
  .test3{
    margin-top: -20px;
  }  

  .content {
    background-color: blue;
    display: inline-block;
  }
  #navbarTop {
    visibility: hidden;
  }
  .class{
    font-size: 50px;
  }
  #button {
   color: blue; 
  }
  .icon:hover{
    background-color: #599cd6;
    color: black;
  }
  .icon{
    font-size: 20px;
    color: black;
  }
  .title {
    padding-top: 30px;
    color: black;
    font-size: 60px;
    margin: 0 auto;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  }
  @media (max-width: 808px){
    .title {
      font-size: 40px;
    }
  }
  .tabs-background {
    background-color: black;
  }
  .tab:hover{
    background-color: #599cd6;
    color: black;
  }
  .tab:focus{
    color: white;
    background-color: #196ea4;
  }
  .tab{
    color: black;
  }
  </style>
</custom-style>
`