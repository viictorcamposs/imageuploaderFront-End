import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    background: whitesmoke;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
  }
`;