import kraken from 'kraken-js'
import express from 'express'
import chalk from 'chalk'
import reactErrorHandler from './middlewares/ReactErrors'
import devHandler from './middlewares/Dev'
import gzipHandler from './middlewares/Gzip'
import spec from './middlewares/Spec'

const app = express()
const port = process.env.PORT || 8000

app.use(devHandler(app))
app.use(gzipHandler(app))
app.use(kraken(spec()))
app.use(reactErrorHandler())

const startupInfo = chalk.blue(`
====================================================================
ENVIRONMENT: ${chalk.yellow.underline.bold(app.settings.env)}
APPLICATION LINK: ${chalk.yellow.underline.bold(`http://localhost:${port}`)}
====================================================================
`)

app.listen(port, () => console.log(startupInfo))
