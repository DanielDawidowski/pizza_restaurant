import styled from "styled-components";
import { motion } from "framer-motion";
import CreateBG from "../../assets/Images/create-bg.jpg";

export const PizzaCreatorStyles = styled(motion.section)`
  .creator {
    background: url(${CreateBG}) 0 0 repeat;
    width: 100%;
    height: 100%;
    display: flex;
    &__left {
      width: 50%;
      &--info {
        margin: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
        border-radius: ${(props) => props.theme.size1};
        background: ${(props) => props.theme.green_light};

        h6 {
          color: ${(props) => props.theme.green};
          font-size: ${(props) => props.theme.size1};
          letter-spacing: 0.5px;
          text-align: center;
          padding: ${(props) => props.theme.size2};
        }
      }
      &--ingredients {
        margin: ${(props) => props.theme.size1};
        &__item {
          margin: ${(props) => props.theme.size1} 0;
          padding: ${(props) => props.theme.size1};
          background: ${(props) => props.theme.white_2};
          border-radius: ${(props) => props.theme.size1};
          border: 1px solid ${(props) => props.theme.black};
          display: grid;
          &--left {
          }
          &--bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              display: grid;
              place-items: center;
              border-radius: 8px;
              border: 1px solid ${(props) => props.theme.black};
              font-size: ${(props) => props.theme.size2};
              &:nth-child(1),
              &:nth-child(3) {
                border-radius: 8px;
                width: 35%;
                cursor: pointer;
              }

              &:nth-child(1) {
                background: ${(props) => props.theme.green_light};
              }

              &:nth-child(2) {
                border-radius: 50%;
                width: 30px;
                height: 30px;
                background: ${(props) => props.theme.yellow};
              }

              &:nth-child(3) {
                background: ${(props) => props.theme.red_light};
              }
            }
            li.disabled {
              background: ${(props) => props.theme.grey};
            }
          }
        }
      }
    }
    &__right {
      width: 50%;
      &--inner {
        position: fixed;
      }
      &--size {
        margin: 8px 8px 8px 0;
        background: ${(props) => props.theme.white_2};
        border-radius: ${(props) => props.theme.size1};
        border: 1px solid ${(props) => props.theme.black};
      }
      &--title {
        display: grid;
        place-items: center;
      }
      &--sizes {
        margin: ${(props) => props.theme.size1};
        display: flex;
        justify-content: space-between;
        &__item {
          border: 1px solid ${(props) => props.theme.black};
          border-radius: 8px;
          display: grid;
          width: 100%;
          place-items: center;
          padding: 8px 0;

          &:not(:last-child) {
            margin-right: 4px;
          }
          &--top {
            font-size: 14px;
            display: grid;
            text-align: center;
            padding: 0 2px;
            color: ${(props) => props.theme.grey};

            span {
              font-size: 10px;
            }
          }
        }
      }

      &--pizza {
        margin-top: ${(props) => props.theme.size6};
      }

      &--total {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        margin-top: ${(props) => props.theme.size6};
        margin-right: ${(props) => props.theme.size1};
        h3 {
          background: ${(props) => props.theme.yellow};
          border: 1px solid ${(props) => props.theme.black};
          border-radius: 8px;
          padding: ${(props) => props.theme.size1};
          span {
            color: ${(props) => props.theme.white};
          }
        }
        button {
          margin: ${(props) => props.theme.size1};
          border-radius: 8px;
          font-size: ${(props) => props.theme.size4};
          color: ${(props) => props.theme.yellow};
          text-shadow:
            -1px -1px 0 ${(props) => props.theme.red},
            1px -1px 0 ${(props) => props.theme.red},
            -1px 1px 0 ${(props) => props.theme.red},
            1px 1px 0 ${(props) => props.theme.red};
        }
      }
    }
  }
`;
