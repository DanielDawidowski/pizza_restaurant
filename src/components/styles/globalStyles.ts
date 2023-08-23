import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    -webkit-font-smoothing: antialiased; 
    -webkit-tap-highlight-color: transparent;
}

body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    font-family: "Righteous";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

a {
    text-decoration: none
}

a:focus {
    outline: none;
} 

ul {
    list-style: none
}

li {
    list-style-type: none
}

img {
    max-width: 100%;
   object-fit: cover;
}

.container {
  margin: 0 auto;
  max-width: 900px;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    max-width: 1200px;
      }
}
`;
