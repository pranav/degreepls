import './SearchForm.scss';
import 'react-select'
import React from 'react';
import {Router, History} from 'react-router';
import Select from 'react-select';

export default React.createClass({

    mixins: [History],

    getInitialState: function() {
        return {
            searchOptions: [
                {
                    value: 'What is the easiest Comparative Study of Cultures course?',
                    label: 'What is the easiest Comparative Study of Cultures course?'
                }, {
                    value: 'What is the best Computer Science course?',
                    label: 'What is the best Computer Science course?'
                }
            ],
            searchValue: 'Try searching for "What is the easiest Comparative Study of Cultures course?"'
        };
    },

    componentDidMount: function() {
        if(this.props.params !== undefined) {
            this.setState({searchValue: this.props.params.searchParam});
        }
    },

    goToSearch: function(search) {
        this.history.pushState(null, `/dashboard/search/${search}`);
    },

    render: function() {
        return (
            <div className="SearchForm">
                <form >
                    <Select name="SearchBox"
                            value={this.state.searchValue}
                            options={this.state.searchOptions}
                            onChange={this.goToSearch} />
                </form>
            </div>
        )
    }
});
