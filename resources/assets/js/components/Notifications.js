import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const contentStyle = {  paddingLeft:'20px', marginLeft:'256px' };

        return (
            <div style={contentStyle}>
                <h1>Notifications here</h1>
            </div>
        );
    }
}
