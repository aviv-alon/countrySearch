import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import CountryGrid from './components/CountryGrid';
import CountryDetail from './components/CountryDetail';
import FilterBar from './components/FilterBar';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  // STEP 1: The app is initialized
  constructor() {
    super();
    this.state = { sort: 'name|asc', search: '' };
    this.makeSelection = this.makeSelection.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // STEP 3: the App component has now loaded, but its state is empty
    // we make an AJAX request to get the data from the API
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        // STEP 4: we get our data from the API and update the state
        // which in turn call the `render` method again
        this.setState({ countries: res.data, selectedCountry: res.data[0] });
      });
  }

  // STEP 9: The `makeSelection` method is called by the CountryGrid
  // component, which updates the App state, which in turn calls the
  // `render` method again
  makeSelection(country) {
    this.setState({ selectedCountry: country });
  }

  // sets the value of the select to the state
  // IMPORTANT dont forget to bind `this` in the constructor!!!
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // creates a sorted array for us to loop over
  getSortedAndFilteredCountries() {
    const re = new RegExp(this.state.search, 'i');
    const [ property, direction ] = this.state.sort.split('|');
    // lodash (_) is a helper library
    const filtered = _.filter(this.state.countries, country => re.test(country.name) || re.test(country.nativeName));
    return _.orderBy(filtered, property, direction);
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <h1 className="title is-1">Country Search</h1>
          {this.state.countries ? (
            <div className="columns">
              <div className="column is-one-quarter-desktop is-half-tablet">
                <CountryDetail {...this.state.selectedCountry} />
              </div>

              <div className="column is-three-quarters-desktop is-half-tablet">

                <FilterBar handleChange={this.handleChange} />
                <hr />

                <CountryGrid
                  countries={this.getSortedAndFilteredCountries()}
                  makeSelection={this.makeSelection}
                />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />, // a new instance of App is created... new App();
  document.getElementById('root')
);
