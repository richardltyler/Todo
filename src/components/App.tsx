import { useContext, useEffect, useRef, useState } from "react";
import TaskList from "./TaskList.tsx";
import NewTask from "./NewTask.tsx";

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
  const [newTodo, setNewTodo] = useState({
    id: 0,
    task: "",
    isComplete: false,
  });

  return (
    <div className='App' data-testid='App'>
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
