import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import { PizzaCreatorStyles } from "./PizzaCreatorStyles";
import Ingredient from "../../components/ingredient/Ingredient";
import { IngredientName } from "../../components/ingredient/Ingredient.interface";
import PizzaWithPlateSVG from "../../assets/SVG/pizzaWithPlate";

const PizzaCreator: FC = (): ReactElement => {
  const ingredientsNames = Object.values(IngredientName);

  return (
    <Layout>
      <PizzaCreatorStyles>
        <div className="creator">
          <div className="creator__left">
            <div className="creator__left--info">
              <h6>You have total 3x ingredients</h6>
            </div>
            <ul className="creator__left--ingredients">
              {ingredientsNames.map((name) => (
                <li className="creator__left--ingredients__item" key={name}>
                  <div className="creator__left--ingredients__item--left">
                    <Ingredient name={name} />
                  </div>
                  <ul className="creator__left--ingredients__item--right">
                    <li>+</li>
                    <li>2x</li>
                    <li>-</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="creator__right">
            <div className="creator__right--inner">
              <div className="creator__right--size">
                <div className="creator__right--title">
                  <h3>size</h3>
                </div>
                <ul className="creator__right--sizes">
                  <li className="creator__right--sizes__item">
                    <h5 className="creator__right--sizes__item--top">
                      large <span className="red">50cm</span>
                    </h5>
                    <span>30$</span>
                  </li>
                  <li className="creator__right--sizes__item">
                    <h5 className="creator__right--sizes__item--top">
                      medium <span className="red">35cm</span>
                    </h5>
                    <span>20$</span>
                  </li>
                  <li className="creator__right--sizes__item">
                    <h5 className="creator__right--sizes__item--top">
                      small <span className="red">24cm</span>
                    </h5>
                    <span>15$</span>
                  </li>
                </ul>
              </div>
              <div className="creator__right--pizza">
                <PizzaWithPlateSVG />
              </div>
              <div className="creator__right--total">
                <h3>
                  Total: <span className="black-border">30$</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </PizzaCreatorStyles>
    </Layout>
  );
};

export default PizzaCreator;
