import Country from "./Country";

function Content({ countries: showCountries }) {
    let countryList = null;
    if (showCountries.length > 1 && showCountries.length < 10) {
        countryList = showCountries.map((country) => (
            <li key={country.area}>{country.name.common}</li>
        ));
    }
    return (
        <>
            {showCountries.length === 1 && (
                <Country country={showCountries[0]} />
            )}
            {countryList && <ul>{countryList}</ul>}
        </>
    );
}

export default Content;
