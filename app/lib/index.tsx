import React, { useEffect, useState } from "react";

import { CTAButton, HeadingL, ThemeProvider } from "@cazoo-uk/cazoo-ui";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import { StyledContainer } from "./index.styles";

const ExampleTinyFrontend: React.FC<ExampleTinyFrontendProps> = ({
  name,
  onCounterChange,
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => onCounterChange?.(value), [value, onCounterChange]);

  return (
    <ThemeProvider>
      <StyledContainer>
        <HeadingL as="h1">Welcome {name}!</HeadingL>
        <p>
          You pressed my button <strong>{value} times</strong>!
        </p>

        <CTAButton onClick={() => setValue((value) => value + 1)}>
          Press me!
        </CTAButton>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default ExampleTinyFrontend;
