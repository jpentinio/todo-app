import React, { useState } from "react";
import { useStore } from "../../store";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
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
    <div className="flex items-center p-6 w-full bg-dark-blue mt-8 rounded-lg drop-shadow-2xl">
      <div className="border-2 border-very-dark-grayish-blue rounded-full p-3" />
      <input
        type="text"
        value={text}
        className="bg-transparent w-full ml-5 focus:outline-none text-xl font-light"
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default AddTodo;
