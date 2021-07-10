
//action types 
const UPDATE_MSG = 'UPDATE_MSG'

//initial state
const initState = {
    msg: ''
}
//action creator 
export const updateMsg = (msg) => ({
    type: UPDATE_MSG,
    payload: msg
})
//reducer
const msgReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_MSG:
            return {
                ...state, msg: action.payload
            }
            default:
                return state;
    }


}
//selectors
export const selectMsg = state => state.msg
export default msgReducer