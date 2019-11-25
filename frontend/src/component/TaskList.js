// src/components/TaskList.js
import '../component.css';

import React from 'react';

import Task from './Task';

const tasks = [
  { id: 'Group A', value: 400 },
  { id: 'Group B', value: 300 },
  { id: 'Group C', value: 300 },
  { id: 'Group D', value: 200 },
];

function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  return (
    <div className="list-items">
        <div> {tasks} </div>
      {tasks.map(task => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

export default TaskList;