import { useState } from "react";

function App() {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "123 - 234 - 232 - 232" },
    ]);
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState(null);

    function handleNewName(e) {
        setNewName(e.target.value);
    }
    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }

    function addPerson(e) {
        e.preventDefault();
        const names = persons.map((person) => person.name);
        if (!names.includes(newName)) {
            setPersons(persons.concat({ name: newName, number: newNumber }));
        } else {
            window.alert(newName + " already exists");
        }
    }

    const renderNames = persons.map((person) => (
        <p key={person.name}>
            {person.name} - {person.number}
        </p>
    ));

    return (
        <main>
            <h2>Phonebook</h2>
            <form onSubmit={(e) => addPerson(e)}>
                <label>
                    name:
                    <input onChange={(e) => handleNewName(e)} type="text" />
                </label>
                <br />
                <label>
                    number:
                    <input onChange={(e) => handleNewNumber(e)} type="text" />
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
