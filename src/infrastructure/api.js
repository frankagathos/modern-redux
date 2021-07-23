import axios from 'axios'

const endpoint = 'https://restcountries.eu/rest/v2/name/'

const transformCountry = (country) => {
    const { name, capital, region } = country
    return { name, capital, region }
}

export const getCountry = async (countryName) => {//async function always returns a promise
    try {
        const resp = await axios.get(`${endpoint}${countryName}`);
        return transformCountry(resp.data)
    }
    catch (err) {
        console.log(err);
    }
}