import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Outfit Light" ;
    src: url("/fonts/Outfit-Light.ttf");
  }
  @font-face {
    font-family: "Outfit Medium" ;
    src: url("/fonts/Outfit-Medium.ttf");
  }
  :root {
  /* Colors */
    --color-red: #FC4747;
    --color-black: #10141E;
    --color-blue: #5A698F;
    --color-darkBlue: #161D2F;
    --color-white: #FFFFFF;
  }
  * , ::before , ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background-color: var(--color-black);
  }
`;
