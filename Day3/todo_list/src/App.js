import React, { useState } from "react";
import "./App.css";
import { Task } from "./Task.js";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }; // Removed the extra comma
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              completed={task.completed}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
