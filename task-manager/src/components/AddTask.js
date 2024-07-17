// src/components/AddTask.js
import React, { useState, useContext } from 'react';
import { useTasks } from './TaskProvider';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const { dispatch } = useTasks();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch({
        type: 'ADD_TASK',
        payload: { id: Date.now(), text: taskText, completed: false }
      });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
