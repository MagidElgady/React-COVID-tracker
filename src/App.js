import React from 'react';

// Easy but messy way of import necessary files
// import Cards from './components/Cards/Cards'
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// Imports fetchData function form index.js
import { fetchData } from './api';

class App extends React.Component {

    // Calls fetchData function
    async componentDidMount() {
        const data = await fetchData();

        // Displays API data in Chrome Developer console
        console.log(data);

    }


    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}
// Required to display stuff to screen
export default App;