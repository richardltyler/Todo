import { useEffect, useRef, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

type Todo = {
  id: number;
  task: string;
};

type Data = {
  data: {
    todos: Todo[];
  };
};

const dummyTodos: Data = {
  data: {
    todos: [
      { id: 0, task: "Gym" },
      { id: 1, task: "Tan" },
      { id: 2, task: "Laundry" },
    ],
  },
};

function App() {
  const [todos, setTodos] = useState<Todo[] | []>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setTodos(dummyTodos.data.todos);
  }, []);

  return (
    <div className='App'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([
            ...todos,
            { id: 100, task: inputRef?.current?.value || "" },
          ]);
        }}
      >
        <input type='text' ref={inputRef}></input>
      </form>
      {todos.map((todo) => {
        return <div key={todo.id}>{todo.task}</div>;
      })}
    </div>
  );

  // return (
  //   <>
  //     <div>
  //       <a href='https://vitejs.dev' target='_blank'>
  //         <img src={viteLogo} className='logo' alt='Vite logo' />
  //       </a>
  //       <a href='https://react.dev' target='_blank'>
  //         <img src={reactLogo} className='logo react' alt='React logo' />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className='card'>
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className='read-the-docs'>
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
