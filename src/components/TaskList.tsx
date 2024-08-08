import React, { Dispatch, SetStateAction, useContext, useEffect } from "react";
import { AppContext } from "../context";
import { Data, Todo } from "./App";
import Task from "./Task";

const dummyTodos: Data = {
  data: {
    todos: [
      { id: 0, task: "Gym", isComplete: true },
      { id: 1, task: "Tan", isComplete: true },
      { id: 2, task: "Laundry", isComplete: false },
    ],
  },
};

type Props = {
  todos: Todo[] | [];
  setTodos: Dispatch<SetStateAction<Todo[] | []>>;
};

export default function TaskList({ todos, setTodos }: Props) {
  const { state } = useContext(AppContext);

  const handleClick = (task: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === task.id) {
        todo = task;
      }

      return todo;
    });

    setTodos([
      ...updatedTodos.filter((todo) => !todo.isComplete),
      ...updatedTodos.filter((todo) => !!todo.isComplete),
    ]);
  };

  // const handleDelete = (task: Todo) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== task.id);

  //   setTodos([
  //     ...updatedTodos.filter((todo) => !todo.isComplete),
  //     ...updatedTodos.filter((todo) => !!todo.isComplete),
  //   ]);
  // };

  useEffect(() => {
    setTodos([
      ...dummyTodos.data.todos.filter((todo) => !todo.isComplete),
      ...dummyTodos.data.todos.filter((todo) => !!todo.isComplete),
    ]);
  }, []);

  return (
    <div className='TaskList' data-testid='TaskList'>
      {state.todos.map((todo) => {
        return (
          <Task
            handleComplete={handleClick}
            // handleDelete={handleDelete}
            key={todo.id}
            task={todo}
          />
        );
      })}
    </div>
  );
}
