export default function Details (props) {
    return (
        <div className="details">
            <span className="description-text">{props.text}</span>
            <span className="material-symbols-outlined icon">{props.icon}</span>
        </div>
    )
}