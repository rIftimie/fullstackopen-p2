import Part from "./Part";

function Content(props) {
    const parts = props.parts.map((part) => <Part key={part.id} item={part} />);
    return <>{parts}</>;
}

export default Content;
