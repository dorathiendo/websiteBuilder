import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Content from '../../components/Content.js';
import data from '../../components/data/daySpa.json';

export default class DaySpa extends Component {
    componentDidMount() {
        document.title = "Biz MedSpa - Day Spa Services";
    }
    renderServicesLinks(){
        return Object.keys(data.services).map(key => {
            return (
                <Content
                    minHeight="auto">
                    <h3>{data.services[key].title}</h3>
                    <Link to={'/dayspa/' + key}>
                        <button className="black">More</button>
                    </Link>
                </Content>
            )
        });
    }
    renderSublink(){
      var param = this.props.match.params.service
      var serviceData = data.services[param];
      return (
        <div className="contentSection">
            <div className="contentWrapper">
                <Content
                  backgroundColor="white"
                  minHeight="auto"
                  color="black">
                  <h2>{serviceData.title}</h2>
                </Content>
                <Content
                  minHeight="auto">
                  <div dangerouslySetInnerHTML={{__html: data.services[param].info}}></div>
                </Content>
              </div>
        </div>
      )
    }
    render() {
        console.log(JSON.stringify(data));
        var param = this.props.match.params.service;
        if(param){
            return this.renderSublink();
        }
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <div>
                        <Content
                            image={data.headerImageSrc}
                            backgroundColor="rgba(0,0,0,0.5)"
                            padding="50px 10%"
                            color="white">
                            <div>
                            <h2>DaySpa Services</h2>
                            <p>Our clinicians are trained to apply their aesthetic sensibilities to every treatment to bring out the natural beauty of your skin. Based on your needs we offer skin rejuvenation treatments such as Thermage and Omnilux lights, wrinkle fillers such as RADIESSE® and JUVÉDERM®, teeth whitening and facial resurfacing. Each visit to BizMed Spa will leave you looking and feeling refreshed, renewed, and rejuvenated.</p>
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
