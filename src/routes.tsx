import React, { FC } from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import PizzaCreator from "./pages/pizza-creator/PizzaCreator";
import Checkout from "./pages/checkout/Checkout";

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
      path: "/checkout",
      element: <Checkout />
    }
    // {
    //     path: "/:pathMatch(.*)*",
    //     element: <NotFound />,
    //   },
  ];
  return useRoutes(elements);
};
