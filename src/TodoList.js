import React from "react";
import "./App.css";

function Todolist ({ItemList}) {
    return (
        <ul>
            {ItemList.map((todo,index) => (
                <li className={todo.done ? "done" : ""} key={index}> 
                <input type="checkbox" /> 
                {todo.todoText}</li>
            ))}
        </ul>
    );
}

export default Todolist;