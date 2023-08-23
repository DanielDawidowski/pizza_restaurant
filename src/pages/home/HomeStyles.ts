import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeStyles = styled(motion.section)`
  overflow: hidden;
  .hero__image {
    display: grid;
    place-items: center;
  }

  background: rgb(255, 255, 255);
  background: linear-gradient(
    340deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(252, 242, 118, 0.7945378835127801) 35%,
    rgba(252, 242, 118, 0.8001401244091386) 60%,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 1) 100%
  );
  .hero__title {
    display: grid;
    place-items: center;
    margin: ${(props) => props.theme.size4} ${(props) => props.theme.size1};
    h1 {
      text-align: center;
    }
  }
  .hero__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    button:first-child {
      margin-right: ${(props) => props.theme.size1};
    }
  }
`;
