import axios from 'axios'

const endpoint = 'https://restcountries.eu/rest/v2/name/'

const transformCountry = (country) => {
    console.log(country)
    const { name, capital, region } = country
    return { name, capital, region }
}

export const fetchCountry = async (countryName) => {//async function always returns a promise
    try {

        const resp = await axios.get(`${endpoint}${countryName}`);
        return resp.data
    }
    catch {
        throw new Error
    }
}