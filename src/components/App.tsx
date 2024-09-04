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
  return (
    <div className='App' data-testid='App'>
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
