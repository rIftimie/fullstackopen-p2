import { useEffect } from "react";
import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import {
    getAll,
    savePerson,
    deleteById,
    updatePerson,
} from "./services/fetch.js";

function App() {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState(null);
    const [newNumber, setNewNumber] = useState(null);
    const [filter, setFilter] = useState(null);

    let filteredPersons = [...persons];

    if (filter) {
        const names = persons.map((person) => person.name);
        filteredPersons = persons.filter((person) => {
            if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                return person;
            }
        });
    }

    function handleNewName(e) {
        setNewName(e.target.value);
    }
    function handleNewNumber(e) {
        setNewNumber(e.target.value);
    }
    function handleFilter(e) {
        setFilter(e.target.value);
    }
    async function handleDelete(id) {
        if (window.confirm("Do you really want to delete this item?")) {
            await deleteById(id);
            setPersons(
                persons.filter((person) => (person.id !== id ? person : null))
            );
        }
    }

    async function addPerson(e) {
        e.preventDefault();

        const names = persons.map((person) => person.name);

        if (newName !== null && newNumber !== null) {
            if (names.includes(newName)) {
                if (
                    window.confirm(
                        newName +
                            " is already added to the phonebook. Replace the old number with a new one?"
                    )
                ) {
                    const updatedPerson = {
                        ...persons.filter(
                            (person) => person.name === newName
                        )[0],
                        number: newNumber,
                    };
                    await updatePerson(updatedPerson);
                    setPersons(
                        persons.map((person) => {
                            if (person.name === newName) {
                                person.number = newNumber;
                            }
                            return person;
                        })
                    );
                }
            } else {
                await savePerson({ name: newName, number: newNumber });
                setPersons(
                    persons.concat({ name: newName, number: newNumber })
                );
            }
        } else {
            window.alert("Error. Input must not be empty");
        }
    }

    useEffect(() => {
        return async () => {
            const allPersons = await getAll();
            setPersons(allPersons);
        };
    }, []);

    return (
        <main>
            <h2>Phonebook</h2>
            <Filter handleFilter={handleFilter} />
            <PersonForm
                addPerson={addPerson}
                handleNewName={handleNewName}
                handleNewNumber={handleNewNumber}
            />
            {persons && (
                <Persons
                    persons={filteredPersons}
                    handleDelete={handleDelete}
                />
            )}
        </main>
    );
}

export default App;
