# Exercise 2.18\* Data for countries, step1

As in the previous exercise, I've implemented a `services/fetch.js`file which takes all the logic for fetching.

Components have been created.

-   **SearchForm**. Stores the form the search logic.
-   **Content**. Renders either the multiple countries a single one.
-   **Country**. Renders a single country.

Loads all the countries in the initial render with the `useEffect`, stores them in a State variable `allCountries`.

To filter them, I've created another variable `showCountries` which represents the countries if the search input is not empty.

# Exercise 2.19\*: Data for countries, step2

To show the expanded view of a country, I've implemented the `simpleRender` State variable with the initial value that is passed on in the props. The **Country** Component then uses it to conditionally render the country information:

-   If simple is true, it will render only the name
-   If simple is false, it will render all the basic information.

To toggle between the states, the `show` button uses the `toggleSimpleRender` to change the variable to false/true.

# Exercise 2.20\*: Data for countries, step3

For the last exercise, I've used the useEffect Hook to fetch the weather data of the country with the `getWeatherByCapital` function in _fetch.js_.
Inside the useEffect, there is a **if** that checks for the `simpleRender` variable
