// src/components/TaskList.js
import React from 'react';
import { useTasks } from './TaskProvider';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasks();

  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
