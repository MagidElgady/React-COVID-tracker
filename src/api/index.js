// Used for requesting data
// from API
import axios from 'axios';

// Link to COVID19 api
const url = 'https://covid19.mathdro.id/api';

// Get data function
export const fetchData = async () => {
    try {
        const response = await axios.get(url);

        return response;

    } catch (error) {

    }
}