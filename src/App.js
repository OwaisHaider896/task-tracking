import "./styles.css";
import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Shopping from Mall", day: "Feb 5th at 2:30am" },
    { id: "2", text: "Meeting at School", day: "Feb 7th at 4:20am" },
    { id: "3", text: "Doctor Appointment", day: "Feb 20th at 5:30am" }
  ]);

  //Delete Task
  const deleteTask = (id) => {
    // console.log("delete", id);

    setTasks(tasks.filter((x) => x.id !== id));
  };

  return (
    <div className="container">
      <Header title="Task Tracking" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
