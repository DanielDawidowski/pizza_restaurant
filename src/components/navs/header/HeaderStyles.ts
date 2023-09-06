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

      .header__cart {
        &--icon {
          position: relative;
          svg {
            width: 38px;
            height: 38px;
          }

          span {
            position: absolute;
            top: 14px;
            right: 10px;
            background: ${(props) => props.theme.red};
            border: 1px solid ${(props) => props.theme.black};
            border-radius: ${(props) => props.theme.size1};
            color: ${(props) => props.theme.white};
            padding: 2px 5px;
            font-size: 10px;
            display: grid;
            place-items: center;
            font-family:
              system-ui,
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              Roboto,
              Oxygen,
              Ubuntu,
              Cantarell,
              "Open Sans",
              "Helvetica Neue",
              sans-serif;
          }
        }
      }
    }
  }
`;
