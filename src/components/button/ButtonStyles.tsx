import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import IButton from "./Button.interface";

const COLOR = {
  PRIMARY: css`
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.green_light};
  `,
  SECONDARY: css`
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.yellow};
    border: 2px dashed ${(props) => props.theme.black};
  `,
  RED: css`
    color: ${(props) => props.theme.black};
    background: ${(props) => props.theme.red};
  `
};

const DISABLED = css`
  cursor: none;
`;

export const ButtonStyles = styled(motion.button)<IButton>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;
