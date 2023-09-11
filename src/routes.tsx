import React, { FC } from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import PizzaCreator from "./pages/pizza-creator/PizzaCreator";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Success from "./pages/checkout/Success";
import Cancel from "./pages/checkout/Cancel";

export const AppRouter: FC = () => {
  const elements: RouteObject[] = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/menu",
      element: <Menu />
    },
    {
      path: "/create-pizza",
      element: <PizzaCreator />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },
    {
      path: "/success",
      element: <Success />
    },
    {
      path: "/cancel",
      element: <Cancel />
    }
    // {
    //     path: "/:pathMatch(.*)*",
    //     element: <NotFound />,
    //   },
  ];
  return useRoutes(elements);
};
