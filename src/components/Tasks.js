import React from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task task={task} onDelete={onDelete} onToggle={onToggle} />
        ))
      ) : (
        <p>No Tasks Added</p>
      )}
    </div>
  );
};

export default Tasks;
