function Country({ country }) {
    const languages = Object.values(country.languages).map((language) => (
        <li>{language}</li>
    ));

    return (
        <section>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            Languages:
            <ul>{languages}</ul>
            <img src={country.flags.png} />
        </section>
    );
}

export default Country;
