import React from "react";

function Part({ item }) {
    return (
        <div>
            <p>
                {item.name}
                <br />
                Exercises: {item.exercises}
            </p>
        </div>
    );
}

export default Part;
