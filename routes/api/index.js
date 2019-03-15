import Greeter from '../../controllers/Greeter'

/**
 * API routing
 * @param {*} app express
 */
 export default function router(app) {
    app.get('/greet', Greeter.hello)
}
