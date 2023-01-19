function SearchForm({ handleSearchName }) {
    return (
        <form>
            <label>
                find countries by name:
                <input onChange={(e) => handleSearchName(e)} type="text" />
            </label>
        </form>
    );
}

export default SearchForm;
