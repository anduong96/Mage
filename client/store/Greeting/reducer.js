import ACTIONS from './types'
import handler from './handler'

const initialState = {
    greeting: null,
    error: null
}
/**
* @description Reducer function
* @param {*} state
* @param {*} action
*/
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_GREETING:
            return handler.setGreeting(action.value)

        case ACTIONS.SET_ERROR:
            return handler.setError(action.error)

        default:
            return state
    }
}
