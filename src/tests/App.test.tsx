import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    expect(screen.getByTestId("App")).toBeDefined();
  });
});
