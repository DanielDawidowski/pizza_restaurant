import styled from "styled-components";
import { motion } from "framer-motion";
import NavBG from "../../../assets/Images/nav-bg.jpg";

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
  .nav__body {
    position: relative;
    height: 100%;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      top: 5%;
      left: -5%;
      width: 120%;
      height: 120%;
      z-index: -1;
      background: url(${NavBG}) -50% 75% no-repeat;
    }
    ul {
      margin: ${(props) => props.theme.size1};
      border: 1px solid ${(props) => props.theme.black_opacity};
      border-radius: 8px;
      background: ${(props) => props.theme.yellow_light_1};
      padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2} ${(props) => props.theme.size5}
        ${(props) => props.theme.size2};
      li {
        margin: ${(props) => props.theme.size4} ${(props) => props.theme.size1};
        padding: ${(props) => props.theme.size3};
        background: ${(props) => props.theme.white};
        border-radius: 8px;
        a {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          svg {
            margin-right: ${(props) => props.theme.size3};
          }
        }
      }
    }
  }
`;
