import react, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") {
      alert("Please enter a task.");
      return;
    }
    setTasks(t=>([...t, newTask]));
    setNewTask(""); 
  }
  function deleteTask(index) {
    setTasks(t=>(t.filter((_, i) => i !== index)));
  }
  function movetaskUp(index) {
    if (index > 0) {
      setTasks(t => {
        const newTasks = [...t];
        const temp = newTasks[index - 1];
        newTasks[index - 1] = newTasks[index];
        newTasks[index] = temp;
        return newTasks;
      });
    }
  }
  function movetaskDown(index) {
    if (index < tasks.length - 1) {
      setTasks(t => {
        const newTasks = [...t];
        const temp = newTasks[index + 1];
        newTasks[index + 1] = newTasks[index];
        newTasks[index] = temp;
        return newTasks;
      });
    }
  }

  return (
    <div className="to-do-list">
      <h1 className="todoheader">To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task...."
          value={newTask}
          onChange={handleInputChange}
            className="inputfield"
        />
        <button onClick={addTask} className="add-button">Add Task</button>
        <ol>
          {tasks.map((task, index) => (
            <li className="task-item" key={index}>
              <span className="text">{task}</span>
              <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
              <button className="task-button" onClick={() => movetaskUp(index)}>Move Up</button>
              <button className="task-button" onClick={() => movetaskDown(index)}>Move Down</button>
            </li>
          ))}
        </ol>

      </div>
    </div>
  );
}

export default ToDoList;
