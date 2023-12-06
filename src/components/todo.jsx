import React, { useState } from "react";
import "../App.css";

const ToDO = () => {
  const [item, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addTask = () => {
    if (newItem.trim() !== "") {
      setItem([...item, { id: Date.now(), text: newItem }]);
      setNewItem("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = item.filter((task) => task.id !== taskId);
    setItem(updatedTasks);
  };

  return (
    <div className="App">
      <h1>React To-Do App</h1>
      <div className="inputText">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter a new task"
        />
        <br />
        <button onClick={addTask} className="btnstyle">
          Add Task
        </button>
      </div>
      <br />
      <div className="tasks">
        {item.map((task) => (
          <div key={task.id} className="newItems">
            {task.text}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default ToDO;
