import { combineReducers } from 'redux'

import { signInReducer } from './signInReducer/signInReducer.js'

export const rootReducer = combineReducers({
    signInReducer,
})
