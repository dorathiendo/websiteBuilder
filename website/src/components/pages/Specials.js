import React, { Component } from 'react';

import Content from '../../components/Content.js';


export default class Specials extends Component {
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
                            <h2>Specials</h2>
                            <p>Our clinicians are trained to apply their aesthetic sensibilities to every treatment to bring out the natural beauty of your skin. Based on your needs we offer skin rejuvenation treatments such as Thermage and Omnilux lights, wrinkle fillers such as RADIESSE® and JUVÉDERM®, teeth whitening and facial resurfacing. Each visit to BizMed Spa will leave you looking and feeling refreshed, renewed, and rejuvenated.</p>
                            </div>
                        </Content>
                    </div>
                    <div className="gridLayout fourGrid">
                        <Content
                            minHeight="auto">
                            <h3>Thermage</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Liposuction</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Smart Lipo</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>Vaser LipoSelection</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>VelaShape</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>LUX1540-FRACTIONAL LASER</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>LUXV-ACNE TREATMENT</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>OMNILUX LIGHTS</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>BOTOX</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>BEYOND WHITE TEETH WHITENING</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>RADIESSE</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>JUVEDERM</h3>
                            <button className="black">More</button>
                        </Content>
                        <Content
                            minHeight="auto">
                            <h3>LATISSE</h3>
                            <button className="black">More</button>
                        </Content>
                        

                    </div>
                </div>
            </div>
        );
    }
}
