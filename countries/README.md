# Exercise 2.18\* Data for countries, step1

As in the previous exercise, I've implemented a `services/fetch.js`file which takes all the logic for fetching.

Components have been created.

-   **SearchForm**. Stores the form the search logic.
-   **Content**. Renders either the multiple countries a single one.
-   **Country**. Renders a single country.

Loads all the countries in the initial render with the `useEffect`, stores them in a State variable `allCountries`.

To filter them, I've created another variable `showCountries` which represents the countries if the search input is not empty.
