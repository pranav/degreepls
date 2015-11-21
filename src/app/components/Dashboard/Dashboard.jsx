import './Dashboard.scss';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="Dashboard-wrapper">
                <div className="Dashboard">
                    <h1>
                        Degree pls<br />
                        <small>Degree pls helps you find the classes you didn't know you were looking for.</small>
                    </h1>
                    <SearchForm />
                </div>
            </div>
        );
    }
}