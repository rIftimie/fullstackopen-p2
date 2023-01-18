import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

function App() {
    const [persons, setPersons] = useState([
        { name: "Arto Hellas", number: "040-123456", id: 1 },
        { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
        { name: "Dan Abramov", number: "12-43-234345", id: 3 },
        { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
    ]);
    const [newName, setNewName] = useState(null);
    const [newNumber, setNewNumber] = useState(null);
    const [filter, setFilter] = useState(null);

    function handleNewName(e) {
        setNewName(e.target.value);
    }
    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }
    function handleFilter(e) {
        setFilter(e.target.value);
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

    let filteredPersons = [...persons];

    if (filter) {
        const names = persons.map((person) => person.name);
        filteredPersons = persons.filter((person) => {
            if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                return person;
            }
        });
    }

    return (
        <main>
            <h2>Phonebook</h2>
            <Filter handleFilter={handleFilter} />
            <PersonForm
                addPerson={addPerson}
                handleNewName={handleNewName}
                handleNewNumber={handleNewNumber}
            />
            <Persons persons={filteredPersons} />
        </main>
    );
}

export default App;
