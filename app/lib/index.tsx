import React, { useEffect, useState } from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import { Button } from "./button";
import styles from "./index.module.css";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <div className={styles.container}>
      <h1>Hello {name}!</h1>

      <p>
        I&apos;m a{" "}
        <a
          href="https://github.com/tiny-frontend"
          target="_blank"
          rel="noreferrer"
        >
          tiny frontend 🐰
        </a>
        , deployed from{" "}
        <a
          href="https://github.com/tiny-frontend/example-tiny-frontend"
          target="_blank"
          rel="noreferrer"
        >
          this git repository
        </a>
        .
      </p>

      <p>
        You pressed the button <strong>{value} times</strong>!
      </p>
      <Button onClick={() => setValue((value) => value + 1)}>Press me!</Button>
    </div>
  );
};

export default ExampleTinyFrontend;
