import React, { FC, ReactElement } from "react";
import "./App.css";
import { AppRouter } from "./routes";

const App: FC = (): ReactElement => {
  return <AppRouter />;
};

export default App;
