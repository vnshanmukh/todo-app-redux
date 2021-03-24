import React from "react";
import "./App.css";
import Input from "../src/components/Input";
import { useSelector } from "react-redux";

import { savedTodoList } from "../src/features/todoSlice";
import TodoItem from "./components/TodoItem";

function App() {
  const todoList = useSelector(savedTodoList);
  return (
    <div className="App">
      {todoList.map((i) => {
        return <TodoItem name={i.item} done={i.done} id={i.key} />;
      })}
      <Input />
    </div>
  );
}

export default App;
