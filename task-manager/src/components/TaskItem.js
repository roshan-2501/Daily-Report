// src/components/TaskItem.js
import React, { useContext, useRef } from 'react';
import { useTasks } from './TaskProvider';

const TaskItem = ({ task }) => {
  const { dispatch } = useTasks();
  const taskRef = useRef();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <li ref={taskRef} className={task.completed ? 'completed' : ''}>
      <span onClick={handleToggle}>{task.text}</span>
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TaskItem;
