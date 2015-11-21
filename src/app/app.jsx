'use es6';

import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import 'expose?$!expose?jQuery!jquery';
import "bootstrap-webpack";
import { Router, Route, Link, IndexRoute } from 'react-router';
import DegreePls from './components/DegreePls/DegreePls.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';


ReactDOM.render((
    <Router>
        <Route path="/" component={DegreePls}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard" component={Dashboard} />
        </Route>
    </Router>
), document.getElementById("content"));