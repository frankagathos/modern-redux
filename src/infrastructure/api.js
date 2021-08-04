import axios from 'axios'

// in this example we use axios 

const endpoint = 'https://restcountries.eu/rest/v2/name/'

export const fetchCountry = async (countryName) => {//async function always returns a promise
    try {
        const resp = await axios.get(`${endpoint}${countryName}`);
        return resp.data
    }
    catch {
        throw new Error
    }
}