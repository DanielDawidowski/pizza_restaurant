import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import ICard from "./Card.interface";
import CardBG from "../../assets/Images/card-bg.jpg";

const TYPE = {
  DISCOUNT: css`
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    height: 100%;
    border: 1px solid ${(props) => props.theme.black};

    &::before {
      content: "";
      position: absolute;
      top: -35%;
      left: -25%;
      width: 150%;
      height: 150%;
      z-index: -1;
      background: url(${CardBG}) 0 0 repeat;
      transform: rotate(-30deg);
    }
    .card__body {
      display: flex;
      justify-content: space-between;

      &--image {
        img {
          position: absolute;
          width: 100%;
          top: 0;
          left: -5%;
          width: 90px;
          height: 90px;
        }
        img:nth-child(2) {
          position: absolute;
          width: 100%;
          top: 0;
          left: -5%;
          z-index: -1;
          width: 90px;
          height: 90px;
        }
      }
      &--content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        margin: ${(props) => props.theme.size1} ${(props) => props.theme.size1};
        button {
          margin-top: ${(props) => props.theme.size1};
        }
        & > * {
          margin-bottom: ${(props) => props.theme.size1};
        }
      }
    }
  `,
  LIST: css`
    background: ${(props) => props.theme.yellow_light_2};
    -webkit-box-shadow: 1px 1px 1px 1px rgba(66, 68, 90, 1);
    -moz-box-shadow: 1px 1px 1px 1px rgba(66, 68, 90, 1);
    box-shadow: 1px 1px 1px 1px rgba(66, 68, 90, 1);
    border: 1px solid ${(props) => props.theme.black_opacity};
    .card__header {
      grid-area: header;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: ${(props) => props.theme.size1} ${(props) => props.theme.size1} 0 ${(props) => props.theme.size1};
      h2 {
        letter-spacing: 1px;
        z-index: 10;
      }
      h2:nth-child(1) {
        margin-right: ${(props) => props.theme.size1};
        font-size: 26px;
        text-align: right;
      }
      h2:nth-child(2) {
        margin-right: ${(props) => props.theme.size2};
        color: ${(props) => props.theme.red};
        font-size: 30px;
      }
    }

    .card__body {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 100%;
      &--image {
        min-height: 200px;
        img {
          position: absolute;
          top: 0;
          left: -25%;
          width: 220px;
          height: 220px;
          z-index: 1;
        }
        svg {
          position: absolute;
          width: 80%;
          top: 18%;
          left: 5%;
          width: 120px;
          height: 120px;
        }
      }
      &--discription {
        width: 50%;
        margin: ${(props) => props.theme.size1} ${(props) => props.theme.size1} 0 ${(props) => props.theme.size1};
        .qoutes svg {
          margin: ${(props) => props.theme.size3} 0 ${(props) => props.theme.size1} 0;
        }

        h6 {
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
          font-style: italic;
        }
      }
      &--ingredients {
        display: flex;
        flex-wrap: wrap;
        min-height: 60px;
        h6 {
          margin-right: ${(props) => props.theme.size1};
          line-height: 1.5;
        }
      }
      &--select {
        display: grid;
        margin-top: ${(props) => props.theme.size1};
        border-radius: 18px;
        padding: 4px;
        &--item {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border: 1px solid ${(props) => props.theme.black_opacity};
          background: ${(props) => props.theme.yellow};
          border-radius: 18px;
          margin: 4px;

          input {
            margin: 4px;
            &:checked + label {
              color: ${(props) => props.theme.green};
              letter-spacing: 0.5px;
              font-weight: 600;
            }
            &:checked + .card__body--select--item {
              border: 1px solid ${(props) => props.theme.black_opacity};
              background: ${(props) => props.theme.yellow};
            }
          }
          label {
            display: flex;
            justify-content: center;
          }
          .card__body--select--item + input[type="radio"]:checked {
            background: ${(props) => props.theme.white};
            color: ${(props) => props.theme.green};
            border: 1px solid ${(props) => props.theme.green};
            border-radius: 18px;
          }
        }
      }
      &--footer {
        margin: ${(props) => props.theme.size1} 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;

        &--btn {
          background: ${(props) => props.theme.green_light};
          border: 2px solid ${(props) => props.theme.white};
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          margin-right: 2px;
          svg {
            width: 20px;
            height: 20px;
          }
        }
        &--kind {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          span {
            margin-right: ${(props) => props.theme.size1};
          }
          svg {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  `,
  SHOP: css`
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    display: flex;
    width: 100%;
    .card__left {
      position: relative;
      width: 30%;

      margin-right: ${(props) => props.theme.size1};
      &--ribbon {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 30px;
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% calc(100% - 8px), 0% 100%, 0% 0%);
        background: ${(props) => props.theme.red};
        border-right: 2px solid ${(props) => props.theme.yellow};
        border-left: 2px solid ${(props) => props.theme.yellow};
      }
      &--image {
        img {
          width: 100px;
          height: 100px;
          margin-top: ${(props) => props.theme.size4};
        }
      }
    }
    .card__right {
      width: 70%;
      &--header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: ${(props) => props.theme.size1} ${(props) => props.theme.size1} 0 ${(props) => props.theme.size1};
        &__title {
          h4 {
            text-transform: lowercase;
            letter-spacing: 0.5px;
          }
          h5 {
            color: ${(props) => props.theme.grey};
            font-size: 10px;
          }
        }
        &__bin {
          background: ${(props) => props.theme.red_light};
          border-radius: 4px;
          padding: 4px;
          display: grid;
          place-items: center;
          margin-right: ${(props) => props.theme.size1};
          svg {
            width: 15px;
            height: 15px;
          }
        }
      }
      &--content {
        display: flex;
        flex-wrap: wrap;
        margin: ${(props) => props.theme.size2} 0;

        &__ingredients {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 4px;

          svg {
            width: 15px;
            height: 15px;
            margin: 0 4px;
          }

          h6 {
            color: ${(props) => props.theme.black_opacity};
            font-size: 10px;
            letter-spacing: 0.5px;
          }
        }
      }

      &--footer {
        display: flex;
        justify-content: flex-end;
        &--content {
          display: flex;
          margin: ${(props) => props.theme.size1};
        }
        &--kind {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          span {
            margin-right: ${(props) => props.theme.size2};
          }
          svg {
            width: 30px;
            height: 30px;
            margin-right: ${(props) => props.theme.size3};
          }
        }
      }
    }
  `
};

export const CardStyles = styled(motion.div)<ICard>`
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  margin: ${(props) => props.theme.size1} 0;

  ${(props) => props.type && TYPE[props.type]}
`;
