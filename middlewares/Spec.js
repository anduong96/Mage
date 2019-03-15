/*eslint-disable dot-notation */
import axios from 'axios'
import https from 'https'

/**
 * @description Kraken startup configuration
 */
export default () => ({
    onconfig: (config, next) => {
        global.CONFIG = config.get('application')
        global.UNSPLASH_KEY = process.env.UNSPLASH_KEY
        next(null, config)
    }
})
