import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Page from '../../components/Page';
import data from '../../components/data/daySpa.json';

export default class DaySpa extends Component {
    render() {
        let serviceParam = (this.props.match.params.service) ? this.props.match.params.service: null;
        return (
            <Page
                pageName="Health Services"
                serviceParam={serviceParam}
                data={data}
                ></Page>
        );
    }
}