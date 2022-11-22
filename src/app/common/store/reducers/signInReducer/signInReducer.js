import { initialState } from '../../model/initialState'
import { ActionTypes } from '../../constants'

export const signInReducer = (state = initialState(), action) => {
    switch (action.type) {
        case ActionTypes.signIn: {
            localStorage.setItem('name', action.payload.name)
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                data: action.payload,
            }
        }
        case ActionTypes.signOut: {
            localStorage.removeItem('name')
            localStorage.removeItem('token')
            return {
                ...state,
                data: action.payload,
            }
        }
        default: {
            return state
        }
    }
}
