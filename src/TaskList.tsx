import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Data, Todo } from "./App";
import Task from "./Task";
import "./TaskList.scss";

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

  useEffect(() => {
    setTodos([
      ...dummyTodos.data.todos.filter((todo) => !todo.isComplete),
      ...dummyTodos.data.todos.filter((todo) => !!todo.isComplete),
    ]);
  }, []);

  return (
    <div className='TaskList' data-testid='TaskList'>
      {todos.map((todo) => {
        return <Task handleComplete={handleClick} key={todo.id} task={todo} />;
      })}
    </div>
  );
}
