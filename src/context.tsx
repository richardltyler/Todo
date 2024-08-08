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
}

// Product

type ActionPayload = {
  [ActionTypes.Create]: Todo;
  [ActionTypes.Delete]: Todo;
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
  switch (action.type) {
    case ActionTypes.Create:
      console.log("thang", action.payload);
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case ActionTypes.Delete:
      console.log(
        "delete thang",
        state.todos.filter((task) => task.id === action.payload.id)
      );
      return {
        ...state,
        todos: state.todos.filter((task) => task.id !== action.payload.id),
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
