import React, { useContext, useEffect, useRef, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useStore } from "../../store";
import { ThemeContext } from "../../context/ThemeContext";

const TodoForm = () => {
  const { mode } = useContext(ThemeContext);
  const todos = useStore((store) => store.todos);
  const setTodos = useStore((store) => store.setTodos);
  const setCompleted = useStore((store) => store.setCompleted);
  const deleteTodo = useStore((store) => store.deleteTodo);
  const filter = useStore((store) => store.filter);
  const setFilter = useStore((store) => store.setFilter);
  const clearCompleted = useStore((store) => store.clearCompleted);
  const [items, setItems] = useState(todos);

  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let _todos = [...todos];

    const draggedItemContent = _todos.splice(dragItem.current, 1)[0];

    _todos.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setTodos(_todos);
  };

  useEffect(() => {
    if (filter === "all") {
      setItems(todos);
    }
    if (filter === "active") {
      setItems(todos.filter((todo) => !todo.isCompleted));
    }
    if (filter === "completed") {
      setItems(todos.filter((todo) => todo.isCompleted));
    }
  }, [filter, todos]);

  return (
    <>
      <div
        className={`mt-7 ${
          mode === "dark" ? "bg-dark-blue" : "bg-white"
        } flex flex-col w-full rounded-lg drop-shadow-2xl border-dashed border-4 border-transparent`}
      >
        {items.length > 0 ? (
          items.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              handleCompleted={(id) => setCompleted(id)}
              handleDelete={(id) => deleteTodo(id)}
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (dragOverItem.current = index)}
              onDragEnd={handleSort}
            />
          ))
        ) : (
          <div className="p-6 text-center">No items</div>
        )}
        <div className="md:text-base text-sm p-4 flex items-center justify-between text-dark-grayish-blue">
          <div>
            {items.filter((item) => !item.isCompleted).length} item(s) left
          </div>
          <div className="md:flex hidden justify-between gap-x-5">
            <div
              onClick={() => setFilter("all")}
              className={`transition cursor-pointer ${
                mode === "dark"
                  ? "hover:text-light-grayish-blue"
                  : "hover:text-dark-blue"
              } font-semibold ${filter === "all" && "text-active-blue"}`}
            >
              All
            </div>
            <div
              onClick={() => setFilter("active")}
              className={`transition cursor-pointer ${
                mode === "dark"
                  ? "hover:text-light-grayish-blue"
                  : "hover:text-dark-blue"
              } font-semibold ${filter === "active" && "text-active-blue"}`}
            >
              Active
            </div>
            <div
              onClick={() => setFilter("completed")}
              className={`transition cursor-pointer ${
                mode === "dark"
                  ? "hover:text-light-grayish-blue"
                  : "hover:text-dark-blue"
              } font-semibold ${filter === "completed" && "text-active-blue"}`}
            >
              Completed
            </div>
          </div>
          <div
            onClick={clearCompleted}
            className={`transition cursor-pointer ${
              mode === "dark"
                ? "hover:text-light-grayish-blue"
                : "hover:text-dark-grayish-blue"
            }`}
          >
            Clear Completed
          </div>
        </div>
      </div>
      <div
        className={`md:hidden text-dark-grayish-blue md:text-base text-sm rounded-lg drop-shadow-2xl flex items-center justify-center p-4 gap-x-5 mt-4 ${
          mode === "dark" ? "bg-dark-blue" : "bg-white"
        }`}
      >
        <div
          onClick={() => setFilter("all")}
          className={`transition cursor-pointer ${
            mode === "dark"
              ? "hover:text-light-grayish-blue"
              : "hover:text-dark-blue"
          } font-semibold ${filter === "all" && "text-active-blue"}`}
        >
          All
        </div>
        <div
          onClick={() => setFilter("active")}
          className={`transition cursor-pointer ${
            mode === "dark"
              ? "hover:text-light-grayish-blue"
              : "hover:text-dark-blue"
          } font-semibold ${filter === "active" && "text-active-blue"}`}
        >
          Active
        </div>
        <div
          onClick={() => setFilter("completed")}
          className={`transition cursor-pointer ${
            mode === "dark"
              ? "hover:text-light-grayish-blue"
              : "hover:text-dark-blue"
          } font-semibold ${filter === "completed" && "text-active-blue"}`}
        >
          Completed
        </div>
      </div>
    </>
  );
};

export default TodoForm;
