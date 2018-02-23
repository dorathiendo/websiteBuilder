import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import Content from '../../components/Content.js';
import data from '../../components/data/medSpaData.json'

export default class MedSpa extends Component {
    renderSublink(){
      var param = this.props.match.params.service
      var serviceData = data.services[param];
      return (
        <div className="contentSection">
            <div className="contentWrapper">
              <div className="gridLayout twoGrid">
                <Content>
                  <h2>{serviceData.title}</h2>
                </Content>
                <Content>
                  <p>{serviceData.info}</p>
                </Content>
              </div>
              </div>
        </div>
      )
    }
    renderServiceLinks(){
      return Object.keys(data.services).map(key => {
        return (
          <Content
              minHeight="auto">
              <h3>{data.services[key].title}</h3>
              <Link to={'/medspa/' + key}>
                <button className="black">More</button>
              </Link>
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
                              image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
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
