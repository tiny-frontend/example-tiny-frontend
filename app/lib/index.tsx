import React, { useEffect, useState } from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import { StyledContainer } from "./index.styles";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <StyledContainer>
      <h1>Welcome {name}!</h1>
      <p>
        You pressed my button <strong>{value} times</strong>!
      </p>

      <button onClick={() => setValue((value) => value + 1)}>Press me!</button>
    </StyledContainer>
  );
};

export default ExampleTinyFrontend;
