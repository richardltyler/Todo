import React, { useContext } from "react";
import { ActionTypes, AppContext } from "../context";
import { Todo } from "./App";

type Props = {
  task: Todo;
  handleComplete: (task: Todo) => void;
  // handleDelete: (task: Todo) => void;
};

type DeleteProps = {
  task: Todo;
};

export default function Task({ task, handleComplete }: Props) {
  const { state, dispatch } = useContext(AppContext);

  const deleteStuff = ({ task }: DeleteProps) => {
    console.log(task);
    dispatch({ type: ActionTypes.Delete, payload: task });
  };

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
      <div className='task-container'>
        <input
          className='task-title-input'
          type='text'
          placeholder={task.task}
        ></input>
      </div>
      <div className='arrow-container'>
        <button
          className='delete-button'
          type='button'
          onClick={() => deleteStuff({ task })}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
