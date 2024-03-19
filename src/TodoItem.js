import React from 'react';
import './App.css';

const TodoItem = ({ text, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{text}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
