// import App from "./App";

export default function Myday() {
    return (
        <div>
            <p>Tasks of the day</p>
            <div className="details">
            <span className="material-symbols-outlined icon">{props.icon}</span>
            <span className="description-text">{props.text}</span>
            </div>
        </div>
    );
};