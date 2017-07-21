// @flow
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from './views/Home'
import Wrapper from './components/Wrapper'
import NoMatch from './views/NoMatch'

const title = 'React App'
const routes = [
    {
        title: 'Home',
        path: '/',
        component: Home,
        exact: true
    }
]
class App extends Component {
    render () {
        return (
            <Router>
                <Wrapper>
                    <Helmet titleTemplate={`${title} - %s`} />
                    <Switch>
                        {routes.map((route, i) => (
                            <Route key={i} {...route} />
                        ))}
                        <Route component={NoMatch} />
                    </Switch>
                </Wrapper>
            </Router>
        )
    }
}

export default App
