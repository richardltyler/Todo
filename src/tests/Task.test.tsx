import { render, screen } from "@testing-library/react";
import Task from "../Task";
import React from "react";

describe("Task", () => {
  it("renders the Task component", () => {
    render(<Task task={{id: 0, task: "Crush"}} />);

    expect(screen.getByTestId("Task")).toBeDefined();
  });
});
