import "./styles.css";
import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";

export default function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "Shopping from Mall",
      day: "Feb 5th at 2:30am",
      reminder: true
    },
    {
      id: "2",
      text: "Meeting at School",
      day: "Feb 7th at 4:20am",
      reminder: false
    },
    {
      id: "3",
      text: "Doctor Appointment",
      day: "Feb 20th at 5:30am",
      reminder: true
    }
  ]);

  //Delete Task
  const deleteTask = (id) => {
    // console.log("delete", id);
    setTasks(tasks.filter((x) => x.id !== id));
  };

  //Toggle Reminder

  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracking"
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}
