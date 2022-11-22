import { initialState } from '../../model/initialState'
import { ActionTypes } from '../../constants'

export const signInReducer = (state = initialState(), action) => {
    switch (action.type) {
        case ActionTypes.signIn: {
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
