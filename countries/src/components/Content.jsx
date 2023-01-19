import Country from "./Country";

function Content({ countries: showCountries }) {
    let countryList = null;
    if (showCountries.length > 1 && showCountries.length < 10) {
        countryList = showCountries.map((country) => (
            <Country simple country={country} />
        ));
    }
    return (
        <>
            {showCountries.length === 1 && (
                <Country country={showCountries[0]} />
            )}
            {countryList && countryList}
        </>
    );
}

export default Content;
