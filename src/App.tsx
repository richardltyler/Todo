import { useEffect, useRef, useState } from "react";
import "./App.scss";
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
  const [todos, setTodos] = useState<Todo[] | []>([]);

  // useEffect(() => {
  //   console.log("");
  // }, [todos]);

  return (
    <div className='App' data-testid='App'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newTodo = {
            id: Math.floor(Math.random() * 100),
            task: inputRef?.current?.value || "",
            isComplete: false,
          };
          setTodos([
            newTodo,
            ...todos.filter((todo) => !todo.isComplete),
            ...todos.filter((todo) => !!todo.isComplete),
          ]);
        }}
      >
        <input type='text' ref={inputRef}></input>
      </form>
      <TaskList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
