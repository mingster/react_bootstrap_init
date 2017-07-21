// @flow
import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';

//import registerServiceWorker from './registerServiceWorker';
//ReactDOM.render(
//render(
//    <App />, document.getElementById('root')
//);
//registerServiceWorker();

const rootEl = document.getElementById('root')
render(<App />, rootEl)
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        render(<NextApp />, rootEl)
    })
}