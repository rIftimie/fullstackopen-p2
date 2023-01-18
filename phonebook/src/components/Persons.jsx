import React from "react";

function Persons({ persons }) {
    const renderNames = persons.map((person) => (
        <p key={person.name}>
            {person.name} - {person.number}
        </p>
    ));
    return <>{renderNames}</>;
}

export default Persons;
