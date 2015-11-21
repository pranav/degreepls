'use es6';

import './DegreePls.scss';
import React from 'react';

export default class DegreePls extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

