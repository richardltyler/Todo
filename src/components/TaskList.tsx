import React, { useContext } from "react";
import { AppContext } from "../context";
import Task from "./Task";

type Props = {};

export default function TaskList({}: Props) {
  const { state } = useContext(AppContext);

  return (
    <div className='TaskList' data-testid='TaskList'>
      {state.todos.map((todo) => {
        return <Task key={todo.id} task={todo} />;
      })}
    </div>
  );
}
