import React, {PureComponent} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from './history'
// import { ListFullHistory } from './pages/histories' 
import {QueryParamProvider} from 'use-query-params'

import {
    PageNotFound,
    Home,
    Products,
    About
} from './pages';

export default class App extends PureComponent {
    render() {
        return (
            <Router history={history}>
                <QueryParamProvider ReactRouterRoute={Route}>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/products' exact component={Products}/>
                        <Route path='/about' exact component={About}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </QueryParamProvider>
            </Router>
        )
    }
}
