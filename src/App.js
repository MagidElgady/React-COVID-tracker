import React from 'react';

// Easy but messy way to import necessary files
// import Cards from './components/Cards/Cards'
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// Imports fetchData function form index.js
import { fetchData } from './api';

import coronaImages from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    // Calls fetchData function
    async componentDidMount() {
        const fetchedData = await fetchData();

        // Displays API data in Chrome Developer console
        // console.log(data);

        this.setState({ data: fetchedData });

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        // Changes displayed Card data to selected country
        this.setState({ data: fetchedData, country: country });
    }
    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img classNam={styles.image} src={coronaImages} alt="COVID-19"></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
// Required to display stuff to screen
export default App;