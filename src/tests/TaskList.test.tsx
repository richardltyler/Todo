import { render, screen, waitFor } from "@testing-library/react";
import TaskList from "../components/TaskList";
import React from "react";
import { AppProvider } from "../context";

describe("TaskList", () => {
  it("renders the TaskList component", async () => {
    render(
      <AppProvider>
        <TaskList />
      </AppProvider>
    );

    await waitFor(() => screen.getByDisplayValue("Gym"));
    expect(screen.getByTestId("TaskList")).toBeDefined();
  });
});
