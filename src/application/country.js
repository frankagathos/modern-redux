// action type 
import { fetchCountry } from './../infrastructure/api';
const COUNTRY_INFO_REQUEST = 'GET_COUNTRY_INFO_REQUEST'
const COUNTRY_INFO_SUCCESS = 'GET_COUNTRY_INFO_SUCCESS'
const COUNTRY_INFO_FAIL = 'GET_COUNTRY_INFO_FAIL'

// initial state 
const initState = {
    countryInfo: [{ capital: '' }],
    loading: false
}
//action creators
const updateCountryName = () => ({
    type: COUNTRY_INFO_REQUEST
})
const updateCountryNameSuccess = (countryInfo) => ({
    type: COUNTRY_INFO_SUCCESS,
    payload: countryInfo
})
const updateCountryNameFail = () => ({
    type: COUNTRY_INFO_FAIL
})
//reducers
const countryNameReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNTRY_INFO_REQUEST:
            return { ...state, loading: true }
        case COUNTRY_INFO_SUCCESS:
            return { ...state, loading: false, countryInfo: action.payload }
        case COUNTRY_INFO_FAIL:
            return { ...state, loading: false }
        default:
            return state
    }

}
export const getCountryInfo = countryName => async (dispatch) => {

    dispatch(updateCountryName())

    fetchCountry(countryName)
        .then((countryInfo) => dispatch(updateCountryNameSuccess(countryInfo)))
        .catch(err => {
            dispatch(updateCountryNameFail());
            console.log("error while fetching country info");
            // console.log(err && err.message)
        })


}
//selectors
export const selectCountryCapital = (state) => state.country?.countryInfo[0]?.capital
export const selectLoadingCountryCapital = state => state.country.loading
export default countryNameReducer