import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { ExampleTinyFrontendProps } from "../../contract/src/props";
import ExampleTinyFrontend from "./index";

const defaultProps = {
  name: "John",
};

const renderExampleTinyFrontend = (
  props?: Partial<ExampleTinyFrontendProps>
) => {
  const mergedProps = { ...defaultProps, ...props };
  return render(<ExampleTinyFrontend {...mergedProps} />);
};

describe("ExampleTinyFrontend", () => {
  it("renders", () => {
    renderExampleTinyFrontend();
    expect(screen.getByText("Welcome John!")).toBeTruthy();
  });
  describe("[name]", () => {
    describe("when a custom name is provided", () => {
      it("displays the custom name", () => {
        renderExampleTinyFrontend({ name: "Jane" });
        expect(screen.getByText("Welcome Jane!")).toBeTruthy();
      });
    });
  });
  describe("[onCounterChange]", () => {
    describe("when the button is clicked", () => {
      it("runs onCounterChange", () => {
        const onCounterChange = jest.fn();
        renderExampleTinyFrontend({ onCounterChange });

        const button = screen.getByRole("button");
        fireEvent(button, new MouseEvent("click"));
        expect(onCounterChange).toBeCalled();
      });
    });
  });
});
