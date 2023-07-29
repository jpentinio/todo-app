import React from "react";
import iconCross from "../../assets/icon-cross.svg";
import iconCheck from "../../assets/icon-check.svg";
import styles from "./todoItem.module.css";

const TodoItem = ({ item, handleCompleted, handleDelete }) => {
  return (
    <div className="cursor-grab w-full flex items-center justify-between border-b border-dark-grayish-blue p-6 text-xl font-light">
      <div className="flex items-center">
        {item.isCompleted ? (
          <div className={styles.checked}>
            <img src={iconCheck} alt="" width={15} height={15} />
          </div>
        ) : (
          <div
            onClick={() => handleCompleted(item.id)}
            className={styles.uncheck}
          />
        )}

        <div
          className={`ml-5 ${
            item.isCompleted && "line-through text-dark-grayish-blue"
          }`}
        >
          {item.text}
        </div>
      </div>
      <div onClick={() => handleDelete(item.id)} className="cursor-pointer">
        <img src={iconCross} alt="" width={20} height={20} />
      </div>
    </div>
  );
};

export default TodoItem;
