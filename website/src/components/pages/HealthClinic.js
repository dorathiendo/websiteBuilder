import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Content from '../../components/Content.js';
import data from '../../components/data/healthClinicData.json';

export default class HealthClinic extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.title = "Biz MedSpa - Health Clinic Services";
    }
    renderServicesLinks(){
        return Object.keys(data.services).map(key => {
            return (
                <Content
                    minHeight="auto">
                    <h3>{data.services[key].title}</h3>
                    <Link to={'/healthclinic/' + key}>
                        <button className="black">More</button>
                    </Link>
                </Content>
            )
        });
    }
    renderSublink(){
        var param = this.props.match.params.service;
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <div className="gridLayout twoGrid">
                        <Content title={data.services[param].title}></Content>
                        <Content>
                            <div dangerouslySetInnerHTML={{__html: data.services[param].info}}></div>
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        var param = this.props.match.params.service;
        if(param){
          return this.renderSublink();
        }
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <div>
                        <Content
                            image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                            backgroundColor="rgba(0,0,0,0.5)"
                            padding="50px 10%"
                            color="white">
                            <div>
                            <h2>Health Clinic Services</h2>
                            <p>Bizmed Health Clinic provides treatment for work-related injuries and illnesses by occupational medicine specialists. Most occupational health care services are provided by primary care physicians as part of their general medical practices, so they are unable to devote the time and energy necessary to specialized rehabilitative care. Clinicians at Bizmed Health Clinic practice only occupational medicine so patients receive dedicated occupational medical care and services such as injury treatment, rehabilitation, work conditioning, and employee counseling assistance.</p>
                                <p>Bizmed Health Clinic directly serves patients through early intervention in each employee injury, and also assists employers by managing all participants in the workers' compensation system and therefore reducing overall costs. We provide outstanding commitment, dedication, knowledge, and expertise to each occupational therapy case, and strive to return each employee to their position as safely and quickly as possible.</p>
                            </div>
                        </Content>
                    </div>
                    <div className="gridLayout fourGrid">
                        {this.renderServicesLinks()}
                    </div>
                </div>
            </div>
        );
    }
}
