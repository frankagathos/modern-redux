import { configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import msg from './msg'

import { createStore } from 'redux' //that's without using the redux-toolkit : https://redux.js.org/api/createstore

const store = configureStore({
    reducer: msg,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store