import { ActionTypes } from '../constants'

export const actionSignOut = (data) => ({
    type: ActionTypes.signOut,
    payload: data
})
