import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <TodoItem
              text={todo}
              onDelete={() => handleDeleteTodo(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
