/**
 * Client side routing
 * @param {*} app express
 */
export default function router(app) {
    app.get('*', (req, res) => res.render(req.url, { ...global.CONFIG }))
}
