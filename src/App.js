import './App.css';
import React, { useState, useRef } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  // hook in react
  const newTodoText = useRef();

  function handleSave() {
    if (newTodoText.current.value === "") return;
    const newTodo = [...todos,newTodoText.current.value];
    setTodos(newTodo);

  }

  return (
    <div>
      <TodoList ItemList = {todos} />
      <input ref={newTodoText} type='text' placeholder='New Todo'></input>
      <button onClick={handleSave}>Save Todo</button>
    </div>
  );
}

export default App;
