import React from 'react';

// Easy but messy way to import necessary files
// import Cards from './components/Cards/Cards'
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
// Imports fetchData function form index.js
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {}
    }

    // Calls fetchData function
    async componentDidMount() {
        const fetchedData = await fetchData();

        // Displays API data in Chrome Developer console
        // console.log(data);

        this.setState({ data: fetchedData });

    }
    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}
// Required to display stuff to screen
export default App;