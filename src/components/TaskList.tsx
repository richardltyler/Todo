import React, { useContext } from "react";
import { useAppContext } from "../context";
import Task from "./Task";

type Props = {};

export default function TaskList({}: Props) {
  const { state } = useAppContext();

  return (
    <div className='TaskList' data-testid='TaskList'>
      {state.todos.map((todo) => {
        return <Task key={todo.id} task={todo} />;
      })}
    </div>
  );
}
