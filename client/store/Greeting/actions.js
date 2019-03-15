import axios from 'axios'
import ACTIONS from './types'

export function setGreeting(value) {
    return { type: ACTIONS.SET_GREETING, value }
}

export function setError(error) {
    return { type: ACTIONS.SET_ERROR, error }
}

export function getGreeting() {
    return dispatch => {
        axios.get('/api/greet')
            .then(({ data }) => dispatch(setGreeting(data.greet)))
            .catch((err) => dispatch(setError(err)))
    }
}
