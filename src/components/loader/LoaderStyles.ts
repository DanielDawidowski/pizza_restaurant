import styled from "styled-components";
import { motion } from "framer-motion";

export const LoaderStyles = styled(motion.div)`
  display: grid;
  place-items: center;
  height: 100px;
  width: 100%;
  svg {
    height: 100px;
    width: 100%;
  }
`;
