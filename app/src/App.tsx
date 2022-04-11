import React from "react";

import { GlobalStyle, SvgGradients } from "@cazoo-uk/cazoo-ui";

import ExampleTinyFrontend from "../lib";

const App = () => {
  return (
    <>
      <ExampleTinyFrontend name={"Test"} />
      <GlobalStyle />
      <SvgGradients />
    </>
  );
};

export default App;
