import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/authSlice'

import rootSagas from './rootSagas'

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [saga],
})

saga.run(rootSagas)

export default store
