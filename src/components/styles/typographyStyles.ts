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
span,
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

h5 {
  font-size: ${(props) => props.theme.size2};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size3};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size4};
  }
}

p {
  letter-spacing: 0.05em;
  line-height: 1.8;
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size5};
  }
}

.yellow-border {
  text-shadow: -1px -1px 0 ${(props) => props.theme.yellow}, 1px -1px 0 ${(props) => props.theme.yellow}, -1px 1px 0 ${(
    props
  ) => props.theme.yellow}, 1px 1px 0 ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.black};
}

.black-border {
  text-shadow: 1px 1px 1px ${(props) => props.theme.black}, -1px -1px 1px ${(props) =>
    props.theme.black}, -1px -1px 1px ${(props) => props.theme.black}, 1px 1px 1px ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
}

.white-border {
  text-shadow: 1px 1px 1px ${(props) => props.theme.white}, -1px -1px 1px ${(props) =>
    props.theme.white}, -1px -1px 1px ${(props) => props.theme.white}, 1px 1px 1px ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
}

.red-border {
  text-shadow: 1px 1px 1px ${(props) => props.theme.red}, -1px -1px 1px ${(props) => props.theme.red}, -1px -1px 1px ${(
    props
  ) => props.theme.red}, 1px 1px 1px ${(props) => props.theme.red};
  color: ${(props) => props.theme.yellow};
}

.green-border {
  text-shadow: 1px 1px 1px ${(props) => props.theme.green}, -1px -1px 1px ${(props) =>
    props.theme.green}, -1px -1px 1px ${(props) => props.theme.green}, 1px 1px 1px ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
}

.yellow-border-red {
  text-shadow: -1px -1px 0 ${(props) => props.theme.yellow}, 1px -1px 0 ${(props) => props.theme.yellow}, -1px 1px 0 ${(
    props
  ) => props.theme.yellow}, 1px 1px 0 ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.red};
}

.white-border-red {
  text-shadow: -1px -1px 0 ${(props) => props.theme.white}, 1px -1px 0 ${(props) => props.theme.white}, -1px 1px 0 ${(
    props
  ) => props.theme.white}, 1px 1px 0 ${(props) => props.theme.white};
  color: ${(props) => props.theme.red};
}

.red {
  color: ${(props) => props.theme.red};
}


`;
