import React, { FC } from "react";
import type { RouteObject } from "react-router";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import PizzaCreator from "./pages/pizza-creator/PizzaCreator";
import Cart from "./pages/cart/Cart";

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
    }
    // {
    //     path: "/:pathMatch(.*)*",
    //     element: <NotFound />,
    //   },
  ];
  return useRoutes(elements);
};
