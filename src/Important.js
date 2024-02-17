import { useState } from "react";
import TodoList from "./TodoList";


function ImportantTodos() {
    const [todos, setTodos] = useState(() => {
      if (localStorage.getItem("lists")) {
        return JSON.parse(localStorage.getItem("lists"));
      } else {
        return [];
      }
    });
  
    // Filter the todos to only include the important ones
    const importantTodos = todos.filter(todo => todo.important);
  
    function handleToggle(index) {
      const newTodos = [...todos];
      newTodos[index].done = !newTodos[index].done;
      setTodos(newTodos);
    }
  
    function handleDelete(index) {
      const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
      setTodos(newTodos);
    }
  
    function handleImportant(index) {
      const newTodos = [...todos];
      newTodos[index].important = !newTodos[index].important;
      setTodos(newTodos);
    }
  
    return (
      <div>
        <h1>Important Todos</h1>
        <TodoList
          ItemList={importantTodos}
          toggleTodo={handleToggle}
          removeTodo={handleDelete}
          importantTodo={handleImportant}
        />
      </div>
    );
  }
  
  export default ImportantTodos;