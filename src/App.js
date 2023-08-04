import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  // hook in react
  const newTodoText = useRef();

  function handleSave() {
    const todoText = newTodoText.current.value
    if (todoText === "") return;
    const newTodo = [...todos,{ todoText, done: false}];
    setTodos(newTodo);

  }

  return (
    <div className='container'>
      <TodoList ItemList = {todos} />
      <input ref={newTodoText} type='text' placeholder='New Todo'></input>
      <button onClick={handleSave}>Save Todo</button>
    </div>
  );
}

export default App;
