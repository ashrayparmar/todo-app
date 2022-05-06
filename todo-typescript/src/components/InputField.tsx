import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className="input">
      <input
        type="input"
        placeholder="Enter a task"
        className="input_box"
      ></input>
      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
