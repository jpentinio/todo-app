import React, { useContext, useState } from "react";
import { useStore } from "../../store";
import { v4 as uuidv4 } from "uuid";
import { ThemeContext } from "../../context/ThemeContext";

const AddTodo = () => {
  const { mode } = useContext(ThemeContext);
  const [text, setText] = useState("");

  const addTodo = useStore((store) => store.addTodo);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      addTodo({ id: uuidv4(), text, isCompleted: false });
      setText("");
    }
  };

  return (
    <div
      className={`flex items-center md:p-6 p-4 w-full ${
        mode === "dark" ? "bg-dark-blue " : "bg-white"
      } mt-8 rounded-lg drop-shadow-2xl`}
    >
      <div
        className={`border-2 ${
          mode === "dark"
            ? "border-very-dark-grayish-blue"
            : "border-light-grayish-blue"
        } rounded-full p-3`}
      />
      <input
        type="text"
        value={text}
        placeholder="Create a new todo..."
        className="bg-transparent w-full ml-5 focus:outline-none md:text-xl text-sm"
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default AddTodo;
