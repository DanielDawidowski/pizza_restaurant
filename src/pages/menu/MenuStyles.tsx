import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuStyles = styled(motion.section)`
  overflow: hidden;
  margin: ${(props) => props.theme.size6} ${(props) => props.theme.size1};

  .menu__image {
    display: grid;
    place-items: center;
    &--line {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        340deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 45%,
        rgba(252, 242, 118, 0.7945378835127801) 45%,
        rgba(252, 242, 118, 0.8001401244091386) 65%,
        rgba(255, 255, 255, 1) 65%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }

  .menu__discount {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
    grid-gap: ${(props) => props.theme.size1};
  }

  .menu__list {
  }
`;
