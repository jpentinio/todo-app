import React, { useContext } from "react";
import iconCross from "../../assets/icon-cross.svg";
import iconCheck from "../../assets/icon-check.svg";
import styles from "./todoItem.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const TodoItem = ({
  item,
  index,
  handleCompleted,
  handleDelete,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragEnter={(e) => onDragEnter(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
      className={`transition ease-in-out group cursor-grab w-full flex items-center justify-between border-b ${
        mode === "dark"
          ? "border-very-dark-grayish-blue"
          : "border-light-grayish-blue"
      } md:p-6 p-4 text-xl`}
    >
      <div className="flex items-center">
        {item.isCompleted ? (
          <div
            onClick={() => handleCompleted(item.id)}
            className={styles.checked}
          >
            <img src={iconCheck} alt="" width={15} height={15} />
          </div>
        ) : (
          <div
            onClick={() => handleCompleted(item.id)}
            className={
              mode === "dark" ? styles.uncheckDark : styles.uncheckLight
            }
          />
        )}

        <div
          className={`ml-5 md:text-xl text-sm ${
            item.isCompleted ? "line-through opacity-40" : "opacity-100"
          }`}
        >
          {item.text}
        </div>
      </div>
      <div
        onClick={() => handleDelete(item.id)}
        className="cursor-pointer hidden group-hover:block"
      >
        <img src={iconCross} alt="" width={20} height={20} />
      </div>
    </div>
  );
};

export default TodoItem;
