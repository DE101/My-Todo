import { NavLink } from "react-router-dom";
import "./App.css";
export default function Menu(props) {
  return (
    <div className="nav-item">
      <nav>
        <NavLink to={props.to}>
          <span className="material-symbols-outlined icon">{props.icon}</span>
          <span className="nav-text">{props.text}</span>
        </NavLink>
      </nav>
    </div>
  );
}
