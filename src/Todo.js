import React from "react";

import "./App.css";
// import { useState } from "react";

function Todo({ item, iterationKey, toggle, remove, important }) {
  // const [selectedDate, setselectedDate] = useState(null);

  return (
    <li
      className={item.done ? "done" : ""}
      value={iterationKey}
      key={iterationKey}
    >
      <input
        key={iterationKey}
        type="checkbox"
        className="checkBox"
        onChange={() => {
          toggle(iterationKey);
        }}
      />
      {item.todoText}

      <input
        className="checkbox1"
        type="checkbox"
        onChange={() => {
          important(iterationKey);
        }}
      />
      <br></br>
      {item.date && new Date(item.date).toString()}
      <button
        onClick={() => {
          remove(iterationKey);
        }}
      >
        <span className="material-symbols-outlined icon">delete</span>
      </button>
      
    </li>
  );
}

export default Todo;
