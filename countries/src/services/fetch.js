async function getAll() {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) throw new Error(response.statusText);

    const json = response.json();
    return json;
}

export { getAll };
