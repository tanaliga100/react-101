import React from "react";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={` text-success mx-5 task-item text-start ${
        task.reminder ? "reminder" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5 className="p-1 d-flex justify-content-between mx-1">
        {task.title}

        <i
          className="far fa-trash-alt m-1 text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        ></i>
      </h5>
      <p className=" text-secondary mx-1 p-1">{task.author}</p>
    </div>
  );
};

export default Task;
