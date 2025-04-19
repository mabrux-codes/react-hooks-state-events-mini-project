import React from "react";

function Task({ text, category, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDeleteTask(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
