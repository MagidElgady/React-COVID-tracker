import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            // Gets list of countries
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();
        // If new countries added, useEffect will keep running
    }, [setFetchedCountries]);

    return (
        // FormControl and NativeSelect from material-ui
        // Used for the dropdown country menu
        <FormControl className={styles.formControl}>
            {/* Sets data to selected country */}
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                {/* Default value */}
                <option value="">Global</option>
                {/* Loops over and displays all countries*/}
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl >
    )
}


export default CountryPicker;