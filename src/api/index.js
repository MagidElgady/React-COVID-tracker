// Used for requesting data
// from API
import axios from 'axios';

// Link to COVID19 api
const url = 'https://covid19.mathdro.id/api';

// Gets data from API and returns what we want
export const fetchData = async (country) => {
    let changeableUrl = url;

    // If country that isn't default is selected,
    // URL will change to the new country
    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }

    // If country selected is default, we get default data from API
    try {
        // Grabs only the bits of data we want form API
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

        // Sorts modified data into a list
        return { confirmed, recovered, deaths, lastUpdate };

    } catch (error) {
        console.log(error);

    }
}


export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        // Grabs the bits of data we need
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifiedData;

    } catch (error) {

    }
}

//  Gets list of countries
export const fetchCountries = async () => {
    try {
        //  Gets list of all countries
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }

}