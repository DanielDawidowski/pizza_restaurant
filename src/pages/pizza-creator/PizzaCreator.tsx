import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import { PizzaCreatorStyles } from "./PizzaCreatorStyles";
import LeftCreator from "./Left/LeftCreator";
import RightCreator from "./Right/RightCreator";

const PizzaCreator: FC = (): ReactElement => {
  return (
    <Layout>
      <PizzaCreatorStyles>
        <div className="creator">
          <LeftCreator />
          <RightCreator />
        </div>
      </PizzaCreatorStyles>
    </Layout>
  );
};

export default PizzaCreator;
