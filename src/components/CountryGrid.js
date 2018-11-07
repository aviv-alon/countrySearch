import React from 'react';
import CountryCard from './CountryCard';

const CountryGrid = ({ countries, makeSelection }) => {
  // STEP 7: The CountryGrid component receives the countries and
  // makeSelection method from the App component via `props`

  // STEP 8: The user clicks on the `li` which calls the
  // `makeSelection` method
  return (
    <ul className="columns is-multiline">
      {countries.map(country =>
        <li
          className="column is-one-third-desktop is-half-tablet"
          key={country.alpha2Code}
          onClick={() => makeSelection(country)}
        >
          <CountryCard country={country} />
        </li>
      )}
    </ul>
  );
};

export default CountryGrid;
