import React from 'react';

// `props` are the properties of the component
// we can use `props` to pass data into the component
// when we use it. In this example in the App component
const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{country.name}</p>
      </header>
      <div className="card-image">
        <figure className="image">
          <img src={country.flag} alt={country.name} />
        </figure>
      </div>
    </div>
  );
};

export default CountryCard;
