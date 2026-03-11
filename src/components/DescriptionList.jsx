export default function DescriptionList(props) {

    const { title, description } = props.language;

    return (
        <div className="description-container">
            <h2 className="description-title">{title}</h2>
            <p className="description">{description}</p>
        </div>
    )
}