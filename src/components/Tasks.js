import React from "react";
import Task from "./Task.js";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div className="m-auto mt-5 w-100 ">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        ></Task>
      ))}
    </div>
  );
};

export default Tasks;
