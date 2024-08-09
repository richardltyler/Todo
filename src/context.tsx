import React, { createContext, Dispatch, useReducer } from "react";
import { Todo } from "./components/App";

type InitialStateType = {
  todos: Todo[];
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionTypes {
  Create = "CREATE_TODO",
  Delete = "DELETE_TODO",
  Update = "UPDATE_TODO",
}

type ActionPayload = {
  [ActionTypes.Create]: Todo;
  [ActionTypes.Delete]: Todo;
  [ActionTypes.Update]: Todo;
};

export type TodoActions =
  ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];

const initialState = {
  todos: [
    { id: 0, task: "Gym", isComplete: true },
    { id: 1, task: "Tan", isComplete: true },
    { id: 2, task: "Laundry", isComplete: false },
  ],
};

const reducer = (state: { todos: Todo[] }, action: TodoActions) => {
  const sortTasks = (todos: Todo[]) => [
    ...todos.filter((todo) => !todo.isComplete),
    ...todos.filter((todo) => !!todo.isComplete),
  ];

  switch (action.type) {
    case ActionTypes.Create:
      const newTodos = [action.payload, ...state.todos];

      console.log("create thang", newTodos);
      return {
        ...state,
        todos: sortTasks(newTodos),
      };
    case ActionTypes.Delete:
      const filtered = state.todos.filter(
        (task) => task.id !== action.payload.id
      );

      console.log("delete thang", filtered);
      return {
        ...state,
        todos: sortTasks(filtered),
      };
    case ActionTypes.Update:
      const updated = state.todos.map((task) => {
        console.log(task.id === action.payload.id);
        return task.id === action.payload.id ? action.payload : task;
      });

      console.log("update thang", updated);
      return {
        ...state,
        todos: sortTasks(updated),
      };
  }
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<TodoActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

type Props = {
  children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
