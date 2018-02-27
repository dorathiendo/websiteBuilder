import React, { Component } from 'react';

import Content from '../../components/Content.js';


export default class Education extends Component {
    render() {
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <div>
                        <Content
                            image="https://image.shutterstock.com/z/stock-photo-education-concept-books-on-the-desk-in-the-auditorium-622572191.jpg"
                            backgroundColor="rgba(0,0,0,0.5)"
                            padding="50px 10%"
                            color="white">
                            <div>
                            <h2>Education</h2>
                            <p>Our clinicians are trained to apply their aesthetic sensibilities to every treatment to bring out the natural beauty of your skin. Based on your needs we offer skin rejuvenation treatments such as Thermage and Omnilux lights, wrinkle fillers such as RADIESSE® and JUVÉDERM®, teeth whitening and facial resurfacing. Each visit to BizMed Spa will leave you looking and feeling refreshed, renewed, and rejuvenated.</p>
                            </div>
                        </Content>
                    </div>
                    <Content
                      className="videoSection">
                      <h2>Educational Videos</h2>
                      <p>We want you be informed about what we do.  We've collected a number of videos on a wide range of sujects for you to view.</p>
                      <div className="video">Play Video</div>
                    </Content>
                    <div className="gridLayout fourGrid">
                        <Content
                            minHeight="auto">
                            <h3>For Patients</h3>
                            <button className="white">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Consent Forms</h3>
                            <button className="white">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Dr. Lee and Biz MedSpa</h3>
                            <button className="white">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Common Side Effects</h3>
                            <button className="white">More</button>
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
}
