
export default class GreetingReducerHanlder {

    static setGreeting(oldState, greeting) {
        return { ...oldState, greeting, error: null }
    }

    static setError(oldState, error) {
        return { ...oldState, error }
    }
}
