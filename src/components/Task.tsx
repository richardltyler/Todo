import React, { useContext } from "react";
import { ActionTypes, AppContext } from "../context";
import { Todo } from "./App";

type Props = {
  task: Todo;
};

type DeleteProps = {
  task: Todo;
};

export default function Task({ task }: Props) {
  const { state, dispatch } = useContext(AppContext);

  const deleteStuff = ({ task }: DeleteProps) => {
    // console.log(task);
    dispatch({ type: ActionTypes.Delete, payload: task });
  };

  const completeTask = () =>
    dispatch({
      type: ActionTypes.Update,
      payload: { ...task, isComplete: !task.isComplete },
    });

  // TODO: make this a form to be submitted
  return (
    <div className='Task' data-testid='Task'>
      <div className='checkbox-container'>
        <input
          className='checkbox'
          type='checkbox'
          defaultChecked={task.isComplete}
          onChange={completeTask}
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
