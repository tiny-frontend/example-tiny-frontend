import React, { useState } from "react";

import styles from "./index.module.css";

interface Props {
  name: string;
}

const ExampleSmolFrontend: React.FC<Props> = ({ name }) => {
  const [value, setValue] = useState(0);
  return (
    <div className={styles.container}>
      <h1>Hello {name}!</h1>
      <p>You pressed the button {value} times!</p>
      <button onClick={() => setValue((value) => value + 1)}>
        Press the button!
      </button>
    </div>
  );
};

export default ExampleSmolFrontend;
