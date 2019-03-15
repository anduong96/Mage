/**
 * @description Entry Script
 */

// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
// Adding ignore-styles in order to embed scss files into React components
process.env.BABEL_DISABLE_CACHE = 1
require('ignore-styles')
require('babel-register')({
    cache: false,
    presets: [
        'env',
        'react',
        'es2017',
        'stage-0'
    ]
})
require('babel-polyfill')
require('./server')
