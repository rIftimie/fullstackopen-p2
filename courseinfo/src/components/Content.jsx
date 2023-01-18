import Part from "./Part";

function Content({ parts }) {
    return (
        <div>
            <Part item={parts[0]} />
            <Part item={parts[1]} />
            <Part item={parts[2]} />
        </div>
    );
}

export default Content;
