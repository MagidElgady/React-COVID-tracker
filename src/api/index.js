// Used for requesting data
// from API
import axios from 'axios';

// Link to COVID19 api
const url = 'https://covid19.mathdro.id/api';

// Get data function
export const fetchData = async () => {
    try {
        // Grabs only the bits of data we want form API
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        // Sorts modified data into a lis
        const modifiedData = { confirmed, recovered, deaths, lastUpdate };

        return modifiedData;

    } catch (error) {

    }
}