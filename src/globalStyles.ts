import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'
 
const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
    font-family: "Antonio Medium";
    src: url("/fonts/Antonio-Medium.ttf");
  }
  @font-face {
    font-family: "Spartan";
    src: url("/fonts/Spartan-Medium.ttf");
  }
  @font-face {
    font-family: "Spartan Bold";
    src: url("/fonts/Spartan-Bold.ttf");
  }
  * {
    box-sizing: border-box;
  }

  body {
    background-color: hsl(240deg 67% 8%);
    height: 100vh;
    color: hsl(0deg 0% 100%);
    font-family: 'Spartan';
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
 
export default GlobalStyle;