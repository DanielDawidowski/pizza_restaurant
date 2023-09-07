import React, { FC, ReactElement, useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { PizzaCreatorStyles } from "./PizzaCreatorStyles";
import LeftCreator from "./Left/LeftCreator";
import RightCreator from "./Right/RightCreator";
import Loader from "../../components/loader/Loader";

const PizzaCreator: FC = (): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <PizzaCreatorStyles>
          <div className="creator">
            <LeftCreator />
            <RightCreator />
          </div>
        </PizzaCreatorStyles>
      )}
    </Layout>
  );
};

export default PizzaCreator;
