import { useEffect } from "react";
import { useState } from "react";
import { getWeatherByCapital } from "../services/fetch";

function Country({ country, simple }) {
    const [simpleRender, setSimpleRender] = useState(simple);
    const [weatherData, setWeatherData] = useState(null);

    const languages = Object.values(country.languages).map((language) => (
        <li>{language}</li>
    ));

    function toggleSimpleRender() {
        setSimpleRender(!simpleRender);
    }
    useEffect(() => {
        if (!simpleRender) {
            return async () => {
                const returnedWeather = await getWeatherByCapital(
                    country.capital[0]
                );
                setWeatherData(returnedWeather);
            };
        }
    }, [simpleRender]);

    return (
        <>
            {!simpleRender ? (
                <section>
                    <button onClick={() => toggleSimpleRender()}>hide</button>
                    <h2>{country.name.common}</h2>
                    {weatherData && <div>FUNCIONA WEATHEEEER</div>}
                    <p>Capital: {country.capital[0]}</p>
                    <p>Area: {country.area}</p>
                    Languages:
                    <ul>{languages}</ul>
                    <img src={country.flags.png} />
                </section>
            ) : (
                <li>
                    {country.name.common}{" "}
                    <button onClick={() => toggleSimpleRender()}>show</button>
                </li>
            )}
        </>
    );
}

export default Country;
