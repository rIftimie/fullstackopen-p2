import { useEffect } from "react";
import { useState } from "react";
import Content from "./components/Content";
import SearchForm from "./components/SearchForm";
import { getAll } from "./services/fetch";

function App() {
    const [searchName, setSearchName] = useState(null);
    const [allCountries, setAllCountries] = useState(null);
    const [showCountries, setShowCountries] = useState(null);

    function handleSearchName(e) {
        setSearchName(e.target.value);

        setShowCountries(
            allCountries.filter((country) =>
                country.name.common
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
    }

    useEffect(() => {
        return async () => {
            const returnedCountries = await getAll();
            setAllCountries(returnedCountries);
        };
    }, []);

    return (
        <main>
            <SearchForm handleSearchName={handleSearchName} />
            {showCountries && <Content countries={showCountries} />}
        </main>
    );
}

export default App;
