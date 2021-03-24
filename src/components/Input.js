import React from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import "./Input.css";
function Input() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const addTodo = () => {
    console.log({ input });
    dispatch(
      saveTodo({
        item: input,
        done: true,
        key: Date.now(),
      })
    );
    setInput("");
  };
  return (
    <div className="input">
      <input type="input" value={input} onChange={handleChange} />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
}

export default Input;
