import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.white};
  z-index: 999;
  nav {
    margin: ${(props) => props.theme.size1};
    padding: ${(props) => props.theme.size1} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav__logo a {
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
