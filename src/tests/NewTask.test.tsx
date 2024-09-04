import { render, screen } from "@testing-library/react";
import NewTask from "../components/NewTask";
import React from "react";

describe("Task", () => {
  test("renders the Task component", () => {
    
    render(<NewTask />);

    expect(screen.getByTestId("NewTask")).toBeDefined();
  });
});
