import { css } from 'lit-element';
// using the css template method for css styles as per documentation
// these get imported into the WebComponent
// https://lit-element.polymer-project.org/guide/styles

export const baseStyles = css`
  h1, h2, h3, h4, h5, p, li {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
  }
  h2 {
    font-weight: 500;
    font-size: 30px;
    color: #599cd6;
    }
  p{
  font-size: 16px;
  }
  body{
    padding: 0px;
    margin: 0px;
  }
  
`
 
/* Base CSS for application -- Light Theme --- TESTING*/
export const baseLightCSS = css`
  :root {
    --backgroundPrimary: #196ea4; /* dark blue */
    --backgroundSecond: #8ecdff; /* light blue */
    --backgroundThird: #114d72; /* darker blue -- for fields in contact */
    --backgroundThird: white;  /* primary background color */
    --backroundFourth: #ededed;  /* light grey shade */
    --primaryFontColor: #196ea4;
    --secondaryFont: black;
    --thirdFont: white;

  }
  h2 {
    color: var(--backgroundPrimary)
  }
  h3 h4 h5 p{
    color: var(--secondaryFont)
  }

`;

/* Base CSS for application -- Dark Theme */
export const baseDarkCSS = css`
`;

export const flexboxCSS = css`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .parent {
    height: 100vh;
    border: 20px solid black;
    display: flex;
    /*flex-direction: column;  /* adjusts elements from horizontal to vetical*/
    /*justify-content: center; */
    /*justify-content: space-between; */
    /* justify-content: space-around; not even*/
    /* justify-content: space-evenly; */
    /*align-items: center; this controls the row, flex-start, flex end, center, stretch (streches block down) */
    /*flex-wrap: wrap; /* allows children to populate next roll when viewport reduced */
    /* align-content: flex-start;  /* controls where children go when view port reduced */
    /* align content: space-around, can control space in between flex vertical*/
     /* flex-flow: column wrap;  /* You can combine both flex-wrap and column or row */

    /* below this is styling inside each child node.
    /* for sub nodes inside child nodes, you can use baseline, witch will allow
    multiple text sizes to be aligned horizontally. */
    /* align-items: baseline; */
    
    /* flex stuff for children */
    /* order -- each child could be a section, i.e. header, body, footer*/
    flex-wrap: wrap;


  }
  /* assign flex grow 1 to for all units so they all split equal left over space */
  .child1{
    width: 200px;
    height: 200px;
    background: blue;
    /*order: 1; */
    /* flex-grow:   will take all the avaliable space, and make it the size of the remaining white space */
    /* flex-grow: 1; */
    /* default size of a container, instead of using "width" is flex-basis*/
    /* flex-basis: 200px; */

    /* better to not fuck around with flex-grow and flex-basis */
    /* easier to use just the "flex" which combines all items (flex grow, flex shrink and flex spaces) */
    /* flex: 1 0 auto; */
    flex: 1 1 300px; 
  }
  .child2{
    width: 200px;
    height: 200px;
    background: red;
    /*order: 4; */
    /*flex-grow: 1; /* if two components want the left over space, and both have 1, it's divided equally*/
    /*flex-grow: 2 if set to 2, it will be 2x bigger then whatever else has flex-grow*/ 
    flex: 1 1 300px; ; /* last one is flex-basis */
  }
  .child3{
    width: 200px;
    height: 200px;
    background: orange;
    /*order: 3; */
    flex: 1 1 300px; 
  }
  h1{
    color: white;
  }

`;