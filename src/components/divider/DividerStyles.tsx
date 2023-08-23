import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import IDivider from "./Divider.interface";

const COLOR = {
  PRIMARY: css`
    color: ${(props) => props.theme.red};
    background: ${(props) => props.theme.red};
  `,
  SECONDARY: css`
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.black};
  `
};

export const DividerStyles = styled(motion.div)<IDivider>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.size4} 0;
  span {
    display: inline-block;
    width: 35%;
    height: 2px;
    background: ${(props) => props.color && COLOR[props.color]};
    border-radius: 10px;
  }
  h4 {
    text-transform: uppercase;
    margin: 0 ${(props) => props.theme.size3};
  }
`;
