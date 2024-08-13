import React, { useEffect, useRef } from "react";
import { ActionTypes, useAppContext } from "../context";
import { Todo } from "./App";

type Props = {
  task: Todo;
};

export default function Task({ task }: Props) {
  const { dispatch } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);

  const deleteStuff = () => {
    dispatch({ type: ActionTypes.Delete, payload: task });
  };

  const completeTask = () =>
    dispatch({
      type: ActionTypes.Update,
      payload: { ...task, isComplete: !task.isComplete },
    });

  const updateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current?.value) {
      dispatch({
        type: ActionTypes.Update,
        payload: { ...task, task: inputRef.current.value },
      });
    }
  };

  return (
    <div className='Task' data-testid='Task'>
      <div className='checkbox-container'>
        <input
          className='checkbox'
          type='checkbox'
          defaultChecked={task.isComplete}
          onChange={completeTask}
        />
      </div>
      <div className='task-container'>
        <form onSubmit={updateTask}>
          <input
            className='task-title-input'
            type='text'
            defaultValue={task.task}
            ref={inputRef}
          />
        </form>
      </div>
      <div className='arrow-container'>
        <button
          className='delete-button'
          type='button'
          onClick={() => deleteStuff()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
