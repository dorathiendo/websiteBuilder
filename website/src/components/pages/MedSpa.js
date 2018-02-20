import React, { Component } from 'react';

import Content from '../../components/Content.js';


export default class MedSpa extends Component {
    render() {
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <div>
                        <Content
                            image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                            title="MedSpa Services"
                            backgroundColor="rgba(0,0,0,0.5)">
                            <p>Our clinicians are trained to apply their aesthetic sensibilities to every treatment to bring out the natural beauty of your skin. Based on your needs we offer skin rejuvenation treatments such as Thermage and Omnilux lights, wrinkle fillers such as RADIESSE® and JUVÉDERM®, teeth whitening and facial resurfacing. Each visit to BizMed Spa will leave you looking and feeling refreshed, renewed, and rejuvenated.</p>
                        </Content>
                    </div>
                    <div className="gridLayout threeGrid alignLeft">
                        <Content
                            title="Thermage"
                            backgroundColor="rgba(0,0,0,0.1)">
                            <p>
                              Thermage is a non-invasive procedure that can help tighten and contour your skin without injections or surgery. Thermage employs radiofrequency technology to heat the deep layers of skin while keeping the top layer cool and undamaged...
                            </p>
                        </Content>
                        <Content
                            title="Liposuction"
                            backgroundColor="rgba(0,0,0,0.1)">
                            <p>
                              At Biz Med Spa, we offer the people of Fremont, CA and beyond the latest, most state-of-the-art liposuction procedures including Smart Liposuction, Vaser Liposuction and Velashape. At our liposuction clinic, we follow the trends in less-invasive liposuction procedures because Biz Med Spa believes in the mission to provide liposuction with increasingly less trauma to body tissue. Call Biz Med Spa today to speak to our liposuction specialist who can answer all your questions about this revolution in weight-loss surgery.
                            </p>
                        </Content>
                        <Content
                            title="Smart Lipo"
                            backgroundColor="rgba(0,0,0,0.1)">
                            <p>
                            Sometimes, all the diet and exercise in the world can still leave you with parts of your body that hold too much fat. But, liposuction might seem like an extreme solution, and many of us will avoid surgery if we can help it.
                            <br/>
                            If this is the case, then Smart Lipo might be right for you. Using only a local anesthetic during a 45–minute in–office procedure, we target pockets of unwanted fat with a laser, immediately dissolving the cells into fluid. This fluid is then released and drained out of your body naturally. And, the laser also stimulates collagen production, resulting in tighter, smoother skin in the treated areas.
                            Because Smart Lipo is a non–invasive procedure, it is ideal for many areas of the body, including:
                            <br/>
                            Arms<br/>
                            Breasts (male)<br/>
                            Buttocks<br/>
                            Chin<br/>
                            Face<br/>
                            Hips<br/>
                            Thighs<br/>
                            Come in for a consultation, and we can discuss if you are a good candidate for Smart Lipo.
                            </p>
                        </Content>
                        <Content
                            title="Vaser LipoSelection"
                            backgroundColor="rgba(0,0,0,0.1)">
                            <p>
                              What is Vaser LipoSelection? Ultrasound technology has been used in medicine for years to get that first glimpse of a baby, remove cataracts and even to clean teeth. Now the power of ultrasound can also be used as to remove unwanted fat deposits with low to minimal pain.
                            </p>
                        </Content>
                        <Content
                            title="Vaser LipoSelection"
                            backgroundColor="rgba(0,0,0,0.1)">
                            <p>
                              What is Vaser LipoSelection? Ultrasound technology has been used in medicine for years to get that first glimpse of a baby, remove cataracts and even to clean teeth. Now the power of ultrasound can also be used as to remove unwanted fat deposits with low to minimal pain.
                            </p>
                        </Content>
                        <Content
                            title="Vaser LipoSelection"
                            backgroundColor="rgba(0,0,0,0.1)">
                            <p>
                              What is Vaser LipoSelection? Ultrasound technology has been used in medicine for years to get that first glimpse of a baby, remove cataracts and even to clean teeth. Now the power of ultrasound can also be used as to remove unwanted fat deposits with low to minimal pain.
                            </p>
                        </Content>
                    </div>
                </div>
            </div>
        );
    }
}
