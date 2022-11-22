import { ActionTypes } from '../constants'

export const actionSignIn = (data) => ({
    type: ActionTypes.signIn,
    payload: data
})
