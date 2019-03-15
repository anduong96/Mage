import chalk from 'chalk'

/**
 * @description Handling gzip encoded files, currently support js and css
 * @param {Express} express instance
 * @return iteration to the next middleware
 */
export default (app) => {
    app.get('*.js.gz', (req, res, next) => {
        res.set('Content-Encoding', 'gzip')
        res.set('Content-Type', 'application/javascript')
        next()
    })

    app.get('*.css.gz', (req, res, next) => {
        res.set('Content-Encoding', 'gzip')
        res.set('Content-Type', 'text/css')
        next()
    })

    console.log(chalk.green.bold('[middleware] Using Gzip'))
    return (err, req, res, next) => next()
}
