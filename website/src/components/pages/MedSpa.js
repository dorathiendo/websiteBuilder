import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Content from '../../components/Content';
import ServiceLink from '../../components/ServiceLink';
import data from '../../components/data/medSpaData.json'

export default class MedSpa extends Component {
    constructor(props){
      super(props);
      this.state = {
        showContent: ''
      }
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
    renderServiceLinks(){
      return Object.keys(data.services).map(key => {
        return (
          <Content>
              <ServiceLink title={data.services[key].title}>
                <div dangerouslySetInnerHTML={{__html: data.services[key].info}}></div>
              </ServiceLink>
          </Content>
        )
      });
    }
    render() {
        let params = this.props.match.params;
        if(params.service){
          return this.renderSublink();
        } else {
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
                              <h2>MedSpa Services</h2>
                              <p>Our clinicians are trained to apply their aesthetic sensibilities to every treatment to bring out the natural beauty of your skin. Based on your needs we offer skin rejuvenation treatments such as Thermage and Omnilux lights, wrinkle fillers such as RADIESSE® and JUVÉDERM®, teeth whitening and facial resurfacing. Each visit to BizMed Spa will leave you looking and feeling refreshed, renewed, and rejuvenated.</p>
                              </div>
                          </Content>
                      </div>
                      <div className="gridLayout fourGrid">
                        {this.renderServiceLinks()}
                      </div>
                  </div>
              </div>
          );
        }
    }
}
