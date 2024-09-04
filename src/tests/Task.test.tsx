import { render, screen } from "@testing-library/react";
import Task from "../components/Task";
import React from "react";

describe("Task", () => {
  it("renders the Task component", () => {
    render(<Task task={{ id: 0, task: "Crush", isComplete: false }} />);

    expect(screen.getByTestId("Task")).toBeDefined();
  });
});
