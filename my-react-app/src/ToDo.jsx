import React, { useState } from 'react';
import './todo-list.css'; 
function ToDo() {

    const [tasks, setTasks] = useState(["Eat Breakfast ", "Take a Shower ", " Walk the dog"]); 
    const [newTask, setNewTask] = useState(""); 

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {

        if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
    };

    function deleteTask(index) {
       const updatedTasks = tasks.filter((element, i) => i!== index);
       setTasks(updatedTasks);
    }

function moveTaskUp(index) {
    if(index>0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] =
        [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}


function moveTaskDown(index) {
    if(index < tasks.length -1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index+1]] =
        [updatedTasks[index+1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}


    return (
        <div>
            <h1 className='to-do-list'>To-Do-List</h1>

            <div className='container'>
                <input
                    className="input"
                    type="text"
                    placeholder='Enter a task'
                    value={newTask} 
                    onChange={handleInputChange} 
                />

                <button className='add-button' onClick={addTask}>Add</button>
                </div>
        <div className="li-container">
                <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                ))}
            </ol>
            </div>
        </div>
    );
}

export default ToDo;
