import styled from "styled-components";
import { motion } from "framer-motion";

export const CartStyles = styled(motion.section)`
  .cart {
    &__list {
      background-color: ${(props) => props.theme.yellow_2};
      border: 1px solid ${(props) => props.theme.black_opacity};
      margin: ${(props) => props.theme.size3} ${(props) => props.theme.size1};
      padding: ${(props) => props.theme.size3} ${(props) => props.theme.size1};
      border-radius: 18px;
    }
    &__total {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      &--pizza {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: ${(props) => props.theme.size3};

        h3 {
          margin-left: ${(props) => props.theme.size1};
        }
      }
      &--price {
        button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-width: 130px;
          max-width: 230px;
        }
      }
    }
  }
`;
