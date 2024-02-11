import React from "react";
import "./App.css";


function Todo ({ item, iterationKey, toggle, remove}) {
    return (
                <li className={item.done ? "done" : ""} key={iterationKey}> 
                <input
                key={iterationKey}
                 type="checkbox" 
                 className="checkBox"
                 onChange={() => {
                    toggle(iterationKey);
                }} /> 
                {item.todoText}
                <button onClick={() => {
                    remove(iterationKey)}}><span className="material-symbols-outlined icon">delete</span></button>
                </li>
            );
}

export default Todo;