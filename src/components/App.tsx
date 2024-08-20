import { useContext, useEffect, useRef, useState } from "react";
import TaskList from "./TaskList.tsx";
import NewTask from "./NewTask.tsx";
import { ActionTypes, sortTasks, useAppContext } from "../context.tsx";

export type Todo = {
  id: number;
  task: string;
  isComplete: boolean;
};

export type Data = {
  data: {
    todos: Todo[];
  };
};

function App() {
  const { dispatch } = useAppContext();
  useEffect(() => {
    dispatch({
      type: ActionTypes.AddAll,
      payload: sortTasks([
        { id: 0, task: "Gym", isComplete: true },
        { id: 1, task: "Tan", isComplete: true },
        { id: 2, task: "Laundry", isComplete: false },
      ]),
    });
  });

  return (
    <div className='App' data-testid='App'>
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
