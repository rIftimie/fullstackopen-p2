async function getAll() {
    const response = await fetch("https://restcountries.com/v3.1/all");

    if (!response.ok) throw new Error(response.statusText);

    const json = response.json();
    return json;
}

async function getWeatherByCapital(capital) {
    const key = REACT_APP_API_KEY;
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}`
    );

    if (!response.ok) throw new Error(response.statusText);

    const json = await response.json();
    return json;
}

export { getAll, getWeatherByCapital };
