import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@material-ui/core";

// import { useDispatch } from "react-redux";
// import { setCheck } from "../features/todoSlice";

function TodoItem({ name, done, id }) {
  const [check, setCheck] = React.useState({ done });
  const handleCheck = () => {
    if (check === true) {
      setCheck(false);
    } else setCheck(true);
  };

  return (
    <div className="todoitem">
      <Checkbox
        checked={check}
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <p className={check && "todo--item"}>{name}</p>
    </div>
  );
}

export default TodoItem;
