import React, { FC, ReactElement, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { clearCart } from "../../redux-toolkit/reducers/cart";

const Success: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return <Layout>Thank you for your purchase!</Layout>;
};

export default Success;
