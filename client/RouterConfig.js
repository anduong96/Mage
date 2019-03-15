
import React from 'react'
import { browserHistory, IndexRoute, Router, Route, Redirect } from 'react-router/lib'
import App from './App'
import Home from './views/Home'
import NotFound from './views/404'

if (module.hot) {
    module.hot.accept()
}

export default (
    <Router history={browserHistory} >
        <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Redirect from='/' to='/home' />
            <Route path='/home' component={Search} />
            <Route path='*' component={NotFound} />
        </Route>
    </Router>
)
