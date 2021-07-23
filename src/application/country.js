// action type 
const COUNTRY_NAME_REQUEST = 'GET_COUNTRY_NAME_REQUEST'
const COUNTRY_NAME_SUCCESS = 'GET_COUNTRY_NAME_SUCCESS'
const COUNTRY_NAME_FAIL = 'GET_COUNTRY_NAME_FAIL'

// initial state 
const initState = {
    name: '',
    loading: false
}
//action creators
export const getCountryName = (name) => ({
    type: COUNTRY_NAME_REQUEST,
    payload: name
})

const countryNameReducer = (state = initState, action) => {
    switch (action.type) {
        case COUNTRY_NAME_REQUEST:
            return { ...state, loading: true }
        case COUNTRY_NAME_SUCCESS:
            return { ...state, loading: false, name: action.payload }
        default:
            return state
    }

}
export default countryNameReducer