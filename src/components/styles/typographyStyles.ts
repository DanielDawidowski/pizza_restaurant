import { createGlobalStyle } from "styled-components";

export const TypographyStyles = createGlobalStyle`
html {
  line-height: 1.25;
  body {
    font-family: "Oswald", cursive;
  }
}

a {
  font-weight: 600;
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  color: ${(props) => props.theme.black};
  font-family: "Righteous", cursive;
}

h1 {
  font-size: ${(props) => props.theme.size5};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size6};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size7};
  }
}

h2 {
  font-size: ${(props) => props.theme.size4};
    @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size5};
    }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size6};
  }
}

h3 {
  font-size: ${(props) => props.theme.size4};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size5};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size6};
  }
}

h4 {
  font-size: ${(props) => props.theme.size3};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size4};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size5};
  }
}

p {
  letter-spacing: 0.05em;
  line-height: 1.8;
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size5};
  }
}




`;
