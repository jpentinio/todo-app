import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useStore } from "../../store";

const TodoForm = () => {
  const todos = useStore((store) => store.filteredTodos);
  const setCompleted = useStore((store) => store.setCompleted);
  const deleteTodo = useStore((store) => store.deleteTodo);
  const filter = useStore((store) => store.filter);
  const setFilter = useStore((store) => store.setFilter);
  const clearCompleted = useStore((store) => store.clearCompleted);

  return (
    <div className="mt-7 bg-dark-blue flex flex-col w-full rounded-lg drop-shadow-2xl">
      {todos.length > 0
        ? todos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleCompleted={(id) => setCompleted(id)}
              handleDelete={(id) => deleteTodo(id)}
            />
          ))
        : ""}
      <div className="p-4 flex items-center justify-between text-dark-grayish-blue">
        <div>
          {todos.filter((todo) => !todo.isCompleted).length} item(s) left
        </div>
        <div className="flex justify-between gap-x-5">
          <div
            onClick={() => setFilter("all")}
            className={`transition cursor-pointer hover:text-light-grayish-blue font-semibold ${
              filter === "all" && "text-active-blue"
            }`}
          >
            All
          </div>
          <div
            onClick={() => setFilter("active")}
            className={`transition cursor-pointer hover:text-light-grayish-blue font-semibold ${
              filter === "active" && "text-active-blue"
            }`}
          >
            Active
          </div>
          <div
            onClick={() => setFilter("completed")}
            className={`transition cursor-pointer hover:text-light-grayish-blue font-semibold ${
              filter === "completed" && "text-active-blue"
            }`}
          >
            Completed
          </div>
        </div>
        <div
          onClick={clearCompleted}
          className="transition cursor-pointer hover:text-light-grayish-blue"
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
