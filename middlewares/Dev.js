/* eslint-disable import/no-extraneous-dependencies, global-require */
import chalk from 'chalk'

/**
 * @description Handle webpack dev server instance
 * @param {Express} express instance
 * @return iteration to next middleware
 */
export default (app) => {
    const env = app.settings.env.toUpperCase()
    if (env === 'DEVELOPMENT') {
        // START DEV SERVER AND HOT RELOAD
        // Using require so it won't become depenendencies in production build.

        const webpack = require('webpack')
        const webpackDevMiddleware = require('webpack-dev-middleware')
        const webpackHotMiddleware = require('webpack-hot-middleware')
        const webpackConfig = require('../webpack.dev')
        const webpackDevServerConfig = require('../webpack.dev.hot')
        const compiler = webpack(webpackConfig)

        app.use(webpackDevMiddleware(compiler, webpackDevServerConfig))
        app.use(webpackHotMiddleware(compiler))

        console.log(chalk.green.bold('[middleware] Using Dev Server'))
    }

    return (err, req, res, next) => next()
}
