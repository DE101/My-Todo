export default function Details (props) {
    return (
        <div className="details">
            <span className="material-symbols-outlined icon">{props.icon}</span>
            <span className="description-text">{props.text}</span>
        </div>
    )
}