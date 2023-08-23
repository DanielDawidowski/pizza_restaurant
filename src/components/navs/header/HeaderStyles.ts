import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)`
  nav {
    margin: ${(props) => props.theme.size1};
    padding: ${(props) => props.theme.size1} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header__logo a {
      display: flex;
      h2 {
        margin-left: ${(props) => props.theme.size1};
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li:first-child {
        margin-right: ${(props) => props.theme.size1};
      }
    }
  }
`;
