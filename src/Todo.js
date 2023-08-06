import React from "react";
import "./App.css";

function Todo ({ item, iterationKey, toggle}) {
    return (
                <li className={item.done ? "done" : ""} key={iterationKey}> 
                <input
                key={iterationKey}
                 type="checkbox" 
                 onChange={() => {
                    toggle(iterationKey);
                }} /> 
                {item.todoText};
                </li>
            );
}

export default Todo;