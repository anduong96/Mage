import React from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store/init'

import './App.scss'

const store = configureStore()
const isDev = process.env.NODE_ENV === 'development'
const bundleFile = !isDev ? 'bundle-min.js.gz' : 'bundle.js'
const vendorFile = !isDev ? 'vendor-min.js.gz' : 'vendor.js'

const App = ({ title, _csrf, children }) => (
    <html>
        <head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='csrf-token' content={_csrf} />
            {!isDev && <link rel='stylesheet' href='bundle.css.gz' />}
        </head>
        <body>
            <Provider store={store}>
                {children}
            </Provider>

            <script type='application/javascript' src={`/${vendorFile}`} />
            <script type='application/javascript' src={`/${bundleFile}`} />
        </body>
    </html>
)

export default hot(module)(App)
