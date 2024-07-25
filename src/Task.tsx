import React from "react";
import "./Task.scss";
import { Todo } from "./App";

type Props = {
  task: Todo;
  handleComplete: (task: Todo) => void;
};

export default function Task({ task, handleComplete }: Props) {
  return (
    <div className='Task' data-testid='Task'>
      <div className='checkbox-container'>
        <input
          className='checkbox'
          type='checkbox'
          defaultChecked={task.isComplete}
          onClick={() =>
            handleComplete({
              ...task,
              isComplete: !task.isComplete,
            })
          }
        ></input>
      </div>
      <div className='task-container'>{task.task}</div>
      <div className='arrow-container'>{task.id}</div>
    </div>
  );
}
