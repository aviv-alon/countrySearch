import React from 'react';
import Map from './Map';

// `props` are the properties of the component
// we can use `props` to pass data into the component
// when we use it. In this example in the App component
const CountryDetail = ({
  flag,
  name,
  nativeName,
  population,
  area,
  latlng
}) => {

  const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // STEP 10: The CountryDetail component receives the `selectedCountry`
  // from the App component and displays the data
  return (
    <div className="card country-detail">
      <div className="card-image">
        <figure className="image">
          <img src={flag} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <h2 className="title is-4">{name}</h2>
          {name !== nativeName && <h3 className="subtitle is-5">{nativeName}</h3>}
          <p><strong>Population: </strong> {formatNumber(population)}</p>
          {area ? (
            <p><strong>Area: </strong> {formatNumber(area)}m<sup>2</sup></p>
          ) : (
            <p><strong>Area: </strong> Unknown</p>
          )}
        </div>
      </div>
      <Map center={latlng} zoom={2} />
    </div>
  );
};

export default CountryDetail;
