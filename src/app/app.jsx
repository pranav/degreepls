'use es6';

import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'expose?$!expose?jQuery!jquery';
import "bootstrap-webpack";
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import DegreePls from './components/DegreePls/DegreePls.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import SearchResults from './components/SearchResults/SearchResults.jsx';

ReactDOM.render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={DegreePls}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard" component={Dashboard}>
                <Route path="search/:searchParam" component={SearchResults}/>
            </Route>
        </Route>
    </Router>
), document.getElementById("content"));