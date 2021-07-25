import { configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import msg from './msg'
import country from './country'
import themeSlice from './themeSlice'
import { createStore } from 'redux' //Step 1  : https://redux.js.org/api/createstore  OLD WAY

const reducer = {
  msg,
  country,
  theme:themeSlice
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store