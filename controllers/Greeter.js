
export default class Adder {

    /**
     * @description add 1
     * @param {*} req
     * @param {*} res
     */
    static hello(req, res) {
        res.status(200).send({ greet: 'Hello world' })
    }
}
