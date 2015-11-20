'use es6';

import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import DegreePls from './components/DegreePls/DegreePls.jsx'

ReactDOM.render((
    <Router>
        <Route path="/" component={DegreePls}></Route>
    </Router>
), document.getElementById("content"));