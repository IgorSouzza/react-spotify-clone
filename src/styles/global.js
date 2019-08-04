import { createGlobalStyle } from 'styled-components';

import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body {
    overflow: hidden;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    color: #FFF;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
