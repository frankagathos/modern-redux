import { configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import msgReducer from './msg'
import countryNameReducer from './country'
import { createStore } from 'redux' //Step 1  : https://redux.js.org/api/createstore  OLD WAY

const reducer = {
  msg:msgReducer,  // exw provlima edw
  country:countryNameReducer
}


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store