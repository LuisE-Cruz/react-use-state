export default function ButtonList(props) {

    const { title } = props.language;
    const { onClick, isActive } = props

    return (
        <button onClick={onClick} className={`btn ${isActive ? "active" : ""}`}>{title}</button>
    )
}