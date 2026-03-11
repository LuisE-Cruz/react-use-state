export default function DescriptionList(props) {

    const { description } = props.language;

    return (
        <p className="description">{description}</p>
    )
}