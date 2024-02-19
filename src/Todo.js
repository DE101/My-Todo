import React from "react";

import "./App.css";
// import { useState } from "react";

function Todo({ item, iterationKey, toggle, remove, important, date }) {
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
        className="radio"
        type="radio"
        onChange={() => {
          important(iterationKey);
        }}
      />
      <br></br>
      <button
        onClick={() => {
          remove(iterationKey);
        }}
      >
        <span className="material-symbols-outlined icon">delete</span>
      </button>
      {date}
    </li>
  );
}

export default Todo;
