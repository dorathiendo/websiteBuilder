import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Page from '../../components/Page';
import data from '../../components/data/medSpaData.json'

export default class MedSpa extends Component {
    render() {
        let serviceParam = (this.props.match.params.service) ? this.props.match.params.service: null;
        return (
            <Page
                pageName="MedSpa"
                linkName="medspa"
                serviceParam={serviceParam}
                data={data}
                ></Page>
        );
    }
}
