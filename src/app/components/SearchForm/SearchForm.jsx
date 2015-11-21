import './SearchForm.scss';
import React from 'react';

export default class SearchForm extends React.Component {
    render() {
        return (
            <div className="SearchForm">
                <input type="text"
                       className="form-control SearchFormInput"
                       placeholder="What is the easiest Comparative Study of Cultures?" />
            </div>
        )
    }
}