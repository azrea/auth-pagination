import React from "react";
import Header from "./Header";
import Button from "./Button";
import { useState } from "react";
import data from "./data";
import Tasks from "./Tasks";
import Form from "./Form";

const TaskTracker = () => {
  const [tasks, setTasks] = useState(data);
  const [showButton, setShowButton] = useState(false);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const addTask = (adData) => {
    setTasks([...tasks, adData]);
  };
  return (
    <section className="taskTrackerWrapper">
      <div className="taskTrackerContainer">
        <header className="taskTrackerHeader">
          <div>
            <Header title="Task Tracker" />
          </div>
          <div>
            <Button
              title={showButton ? "Close" : "Add New Task"}
              onClick={() => setShowButton(!showButton)}
            />
          </div>

          {showButton && <Form onAdd={addTask} />}
        </header>
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
      </div>
    </section>
  );
};

export default TaskTracker;
