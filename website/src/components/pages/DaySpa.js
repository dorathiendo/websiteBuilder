import React, { Component } from 'react';

import Content from '../../components/Content.js';


export default class DaySpa extends Component {
    render() {
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
                            <h2>DaySpa Services</h2>
                            <p>Our clinicians are trained to apply their aesthetic sensibilities to every treatment to bring out the natural beauty of your skin. Based on your needs we offer skin rejuvenation treatments such as Thermage and Omnilux lights, wrinkle fillers such as RADIESSE® and JUVÉDERM®, teeth whitening and facial resurfacing. Each visit to BizMed Spa will leave you looking and feeling refreshed, renewed, and rejuvenated.</p>
                            </div>
                        </Content>
                    </div>
                    <div className="gridLayout fourGrid">
                        <Content
                            minHeight="auto">
                            <h3>Full Body Massage</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Facials</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Waxing</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Infrared Sauna Treatments</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Foot Reflexology</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Hot Stone Therapy</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Aromatherapy Massage</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Salt Scrub and Massage</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Shiatsu Massage</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Basic Facial</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>BizMed Signature Facial</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Acne Treatment</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Ultrasonic Facial</h3>
                            <button className="black">More</button>
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
}
