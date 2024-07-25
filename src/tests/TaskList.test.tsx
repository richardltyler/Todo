import { render, screen } from "@testing-library/react";
import TaskList from "../TaskList";
import React from "react";

describe("TaskList", () => {
  it("renders the TaskList component", () => {
    render(<TaskList todos={[]} setTodos={() => {}} />);

    expect(screen.getByTestId("TaskList")).toBeDefined();
  });
});
