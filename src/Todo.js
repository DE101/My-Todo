import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import { useState } from "react";

function Todo({ item, iterationKey, toggle, remove, important }) {
  const [selectedDate, setselectedDate] = useState(null);

  const handleDateChange = (date) => {
    setselectedDate(date);
  };
  return (
    <li className={item.done ? "done" : ""} value = {iterationKey} key={iterationKey}>
      <input
        key={iterationKey}
        type="checkbox"
        className="checkBox"
        onChange={() => {
          toggle(iterationKey);
        }}
      />
      <input
      className="radio"
        type="radio"
        onChange={() => {
          important(iterationKey);
        }}
      />
      {item.todoText}
      <br></br>
      <button
        onClick={() => {
          remove(iterationKey);
        }}
      >
        <span className="material-symbols-outlined icon">delete</span>
      </button>
      <DatePicker
        className="datentime"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="D/MM/YYYY - hh:mm"
        showTimeSelect
        timeIntervals={5}
        timeFormat="hh:mm"
      />
    </li>
  );
}

export default Todo;
