import axios from 'axios'

export const fetchCatImgUrl = async () => {//async function always returns a promise
    try {
        const resp = await axios.get('https://thatcopy.pw/catapi/rest/');
        return resp.data
    }
    catch {
        throw new Error
    }
}