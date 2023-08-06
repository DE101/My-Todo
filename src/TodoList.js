import React from "react";
import "./App.css";
import Todo from "./Todo";

function Todolist ({ItemList, toggleTodo}) {
    return (
        <ul>
            {ItemList.map((todo,index) => (
            <Todo item={todo} iterationKey={index} toggle={toggleTodo} />
            ))}
        </ul>
    );
}

export default Todolist;