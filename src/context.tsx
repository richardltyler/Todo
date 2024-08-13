import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";
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
  AddAll = "ADD_ALL",
  Create = "CREATE_TODO",
  Delete = "DELETE_TODO",
  Update = "UPDATE_TODO",
}

type ActionPayload = {
  [ActionTypes.AddAll]: Todo[];
  [ActionTypes.Create]: Todo;
  [ActionTypes.Delete]: Todo;
  [ActionTypes.Update]: Todo;
};

export type TodoActions =
  ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];

const initialState = {
  todos: [],
};

const sortTasks = (todos: Todo[]) => [
  ...todos.filter((todo) => !todo.isComplete),
  ...todos.filter((todo) => !!todo.isComplete),
];

const reducer = (state: { todos: Todo[] }, action: TodoActions) => {
  switch (action.type) {
    case ActionTypes.AddAll: {
      return { ...state, todos: sortTasks(action.payload) };
    }
    case ActionTypes.Create:
      const newTodos = [action.payload, ...state.todos];

      return {
        ...state,
        todos: sortTasks(newTodos),
      };
    case ActionTypes.Delete:
      const filtered = state.todos.filter(
        (task) => task.id !== action.payload.id
      );

      return {
        ...state,
        todos: sortTasks(filtered),
      };
    case ActionTypes.Update:
      const updated = state.todos.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });

      return {
        ...state,
        todos: sortTasks(updated),
      };
    default:
      // TODO: error handling
      return state;
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
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  });

  useEffect(() => {
    dispatch({
      type: ActionTypes.AddAll,
      payload: sortTasks([
        { id: 0, task: "Gym", isComplete: true },
        { id: 1, task: "Tan", isComplete: true },
        { id: 2, task: "Laundry", isComplete: false },
      ]),
    });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
