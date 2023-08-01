import React from "react";

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