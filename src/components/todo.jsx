import React, { useState } from "react";
import "../App.css";
import "./ToDo.css";

const ToDo = () => {
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
    <div className="main">
      <h2>React To-Do App</h2>
      <br />
      <div className="inputText">
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a new task"
            className="input_text"
          />
        </div>
        <br />
        <div>
          <button onClick={addTask} className="btnstyle">
            Add Task
          </button>
        </div>
      </div>
      <br />
      <div className="tasks">
        {item.map((task) => (
          <div key={task.id} className="newItems">
            {task.text}
            <div className="parent_button">
              <button onClick={() => deleteTask(task.id)} className="deletebtn">
                Delete
              </button>
            </div>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
};

export default ToDo;
