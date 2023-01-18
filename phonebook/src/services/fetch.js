async function getAll() {
    const response = await fetch("http://localhost:3001/persons");
    const json = await response.json();
    return json;
}

async function savePerson(person) {
    const response = await fetch("http://localhost:3001/persons", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(person),
    });
    const json = await response.json();
    return json;
}

async function updatePerson(person) {
    const response = await fetch(`http://localhost:3001/persons/${person.id}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(person),
    });
    const json = await response.json();
    return json;
}

async function deleteById(id) {
    const response = await fetch(`http://localhost:3001/persons/${id}`, {
        method: "DELETE",
    });
    const json = await response.json();
    return json;
}

async function findOneById(id) {
    const response = await fetch(`http://localhost:3001/persons/${id}`);
    const json = await response.json();
    return json;
}

export { getAll, savePerson, findOneById, deleteById, updatePerson };
