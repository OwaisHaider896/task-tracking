import React from "react";
import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => <Task task={task} onDelete={onDelete} />)
      ) : (
        <p>No Tasks Added</p>
      )}
    </div>
  );
};

export default Tasks;
