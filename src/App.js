import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoMaker from "./TodoMaker";
import SearchBar from "./Search";
import Menu from "./Menu";
import Details from "./Details";
import Settings from "./Settings";
import UserProfile from "./UserProfile";
import Myday from "./Myday";
import Important from "./Important";

function App() {

  return (
    <div className="container">
      <div className="left-side-nav">
        <Menu text="User Profile" icon="Account_circle" to="/UserProfile"></Menu>
        <Menu text="My Day" icon="sunny" to="/MyDay"></Menu>
        <Menu text="All" icon="Database" to="/All"></Menu>
        <Menu text="Important" icon="Monitoring" to="/Important"></Menu>
        <Menu text="Settings" icon="Settings" to="/Settings"></Menu>
      </div>
      <div className="main-container">
        <SearchBar></SearchBar>

        <Routes>
          <Route path="/All" Component={TodoMaker}></Route>
          <Route path="/" Component={Myday}></Route>
          <Route path="/Important" Component={Important}></Route>
          <Route path="/UserProfile" Component={UserProfile}></Route>
          <Route path="/Settings" Component={Settings}></Route>
        </Routes>
        
        
      </div>
      <div className="right-side-nav">
        <Details text="todo" icon="task"></Details>
        <Details text="time" icon="Schedule"></Details>
        <Details text="assigned" icon="person_raised_hand"></Details>
        <Details text="todo" icon="task"></Details>
        <Details text="todo" icon="task"></Details>
      </div>
    </div>
  );
}

export default App;
