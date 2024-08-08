import { useContext, useEffect, useRef, useState } from "react";
import { ActionTypes, AppContext } from "../context.tsx";
import TaskList from "./TaskList.tsx";

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
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { state, dispatch } = useContext(AppContext);
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const [newTodo, setNewTodo] = useState({
    id: 0,
    task: "",
    isComplete: false,
  });

  useEffect(() => {
    // console.log(state);
    // dispatch({ type: ActionTypes.Create, payload: newTodo });
  }, [todos]);

  return (
    <div className='App' data-testid='App'>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch({ type: ActionTypes.Create, payload: newTodo });

          setTodos([
            newTodo,
            ...todos.filter((todo) => !todo.isComplete),
            ...todos.filter((todo) => !!todo.isComplete),
          ]);
        }}
        onKeyDown={() => {
          setNewTodo({
            ...newTodo,
            task: inputRef?.current?.value || "",
            isComplete: false,
          });
        }}
      >
        <input className='form-input' type='text' ref={inputRef}></input>
      </form>
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
