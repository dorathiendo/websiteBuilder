import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Page from '../../components/Page';
import data from '../../components/data/healthClinicData.json';

export default class HealthClinic extends Component {
    render() {
        let serviceParam = (this.props.match.params.service) ? this.props.match.params.service: null;
        return (
            <Page
                pageName="Health Services"
                linkName="healthclinic"
                serviceParam={serviceParam}
                data={data}
                ></Page>
        );
    }
}
