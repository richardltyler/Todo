import React, { ReactElement, useContext, useRef, useState } from "react";
import { ActionTypes, AppContext } from "../context";
import { Todo } from "./App";

type Props = {};

const emptyTodo: Todo = {
  id: Math.floor(Math.random() * 1000) + 1,
  task: "",
  isComplete: false,
};

export default function NewTask({}: Props): ReactElement {
  const [newTodo, setNewTodo] = useState(emptyTodo);
  const { state, dispatch } = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    dispatch({ type: ActionTypes.Create, payload: newTodo });
    setNewTodo({ ...emptyTodo, id: Math.floor(Math.random() * 1000) + 1 });
  };

  return (
    <div className='NewTask'>
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
