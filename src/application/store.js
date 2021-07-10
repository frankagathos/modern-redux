import { configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import msg from './msg'

import { createStore } from 'redux' //Step 1  : https://redux.js.org/api/createstore

const store = configureStore({
    reducer: msg,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store