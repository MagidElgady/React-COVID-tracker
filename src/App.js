import React from 'react';

// Easy but messy way of import necessary files
// import Cards from './components/Cards/Cards'
// import Charts from './components/Charts/Charts';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
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