import { useState } from "react";

function App() {
    const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
    const [newName, setNewName] = useState("");

    function handleNewName(e) {
        setNewName(e.target.value);
    }

    function addPerson(e) {
        e.preventDefault();
        setPersons(persons.concat({ name: newName }));
    }

    const renderNames = persons.map((person) => (
        <p key={person.name}>{person.name}</p>
    ));

    return (
        <main>
            <h2>Phonebook</h2>
            <form onSubmit={(e) => addPerson(e)}>
                <label>
                    name:
                    <input
                        onChange={(e) => handleNewName(e)}
                        name={"inputName"}
                        type="text"
                    />
                </label>
                <label>
                    <button type="submit">add</button>
                </label>
            </form>
            <h2>Names</h2>
            {renderNames}
        </main>
    );
}

export default App;
