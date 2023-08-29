import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { IIngredient } from "./Ingredient.interface";

export const IngredientStyles = styled(motion.div)<IIngredient>`
  .ingredient {
    &__list {
      display: flex;
      align-items: center;

      img {
        width: 45px;
        height: 45px;
      }
      h6 {
        font-size: 14px;
        padding-left: 4px;
        text-align: left;
        width: 100%;
      }
    }
  }
`;
