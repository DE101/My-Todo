import React from "react";
import "/app.css";

function Todolist ({ItemList}) {
    return (
        <ul>
            {ItemList.map((todo,index) => (
                <li key={index}> {todo}</li>
            ))}
        </ul>
    );
}

export default Todolist;