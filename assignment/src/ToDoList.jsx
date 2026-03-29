import React, { useState } from "react";
import './styling.css'
function TodoApp() {
   const [tasks, setTasks] = useState([
    { id: 1, text: "Build To-Do App", completed: true },
    { id: 2, text: "Test it's input field", completed: false },
    { id: 3, text: "Test it's buttons", completed: false }, 
    { id: 4, text: "Learn React", completed: false }
  ]);

  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  // Add or Update
  const handleAdd = () => {
    if (editId !== null) {
      const updated = tasks.map((task) =>
        task.id === editId
          ? { ...task, text: input }
          : task
      );
      setTasks(updated);
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(), // unique id
        text: input,
        completed: false
      };
      setTasks([...tasks, newTask]);
    }
    setInput("");
  };

  // Delete
  const handleDelete = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
  };

  // Edit
  const handleEdit = (task) => {
    setInput(task.text);
    setEditId(task.id);
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );
    setTasks(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Build To-Do App Assignment - Advait Naik</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add task"
        type="text" class="modern-input"
      />

      <button class="btn-primary" onClick={handleAdd}>
        {editId !== null ? "Update" : "Add task"}
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleComplete(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {task.text}
            </span>
            <button class="btn-primary" onClick={() => handleEdit(task)}>Edit</button>
            <button class="btn-primary" onClick={() => handleDelete(task.id)}>Delete</button>
            <button class="btn-primary" onClick={() => toggleComplete(task.id)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;