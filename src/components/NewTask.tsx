import React, { ReactElement, useRef, useState } from "react";
import { ActionTypes, useAppContext } from "../context";
import { Todo } from "./App";

const emptyTodo: Todo = {
  id: Math.floor(Math.random() * 1000) + 1,
  task: "",
  isComplete: false,
};

export default function NewTask(): ReactElement {
  const [newTodo, setNewTodo] = useState(emptyTodo);
  const { dispatch } = useAppContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current?.value) {
      dispatch({ type: ActionTypes.Create, payload: newTodo });
      setNewTodo({ ...emptyTodo, id: Math.floor(Math.random() * 1000) + 1 });
      inputRef.current.value = "";
    }
  };

  return (
    <div className='NewTask' data-testid='NewTask'>
      <form
        className='task-form'
        onSubmit={(event) => handleSubmit(event)}
        onKeyDown={() => {
          setNewTodo({
            ...newTodo,
            task: inputRef?.current?.value || "",
          });
        }}
      >
        <input
          className='form-input'
          type='text'
          ref={inputRef}
          placeholder="Purge the warp core, slay my enemies, die a warrior's death, etc."
        ></input>
      </form>
    </div>
  );
}
