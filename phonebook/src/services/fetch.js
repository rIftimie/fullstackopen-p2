async function getAll() {
    const response = await fetch("http://localhost:3001/persons");

    if (!response.ok) throw new Error(response.statusText);

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

    if (!response.ok) throw new Error(response.statusText);

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

    if (!response.ok) throw new Error(response.statusText);

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

export { getAll, savePerson, deleteById, updatePerson };
