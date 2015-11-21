import './SearchForm.scss';
import 'react-select'
import React from 'react';
import Select from 'react-select';

export default React.createClass({

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
        };
    },

    componentDidMount: function() {
        var value = `Try searching for "${this.state.searchOptions[0].value}"`;
        if(this.props.params !== undefined) {
            value = this.props.params.searchParam;
        }
        this.setState({ searchValue: value });
    },

    goToSearch: function(search) {
        window.location.hash = "#dashboard/search/"+search;
        this.setState({searchValue: search});
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
