// src/App.js
import React from 'react';
import { TaskProvider } from './components/TaskProvider';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './style.css';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
