export default function ButtonList(props) {

    const { title } = props.language;

    return (
        <button className="btn">{title}</button>
    )
}