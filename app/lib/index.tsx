import React, { useState } from "react";

import { ExampleTinyFrontendType } from "../../contract/src/index";
import { Button } from "./button";
import styles from "./index.module.css";

const ExampleTinyFrontend: ExampleTinyFrontendType = ({ name }) => {
  const [value, setValue] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Hello {name}!</h1>
      <p>You pressed the button {value} times!</p>
      <Button onClick={() => setValue((value) => value + 1)}>Press me!</Button>
    </div>
  );
};

export default ExampleTinyFrontend;
