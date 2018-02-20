import React from 'react';

import Content from '../components/Content.js';



const Home = () => (
    <div className="contentSection">
        <div className="contentWrapper">
            <div>
            <Content
                image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                title="Welcome to Biz MedSpa"
                backgroundColor="rgba(0,0,0,0.5)"
                >
                <div>Biz Medspa is a medical spa and treatment center where you can find an array of therapies to rejuvenate and refresh your skin. We are a physican-based facility that focuses on caring for and treating the whole patient, so each time you meet with a Biz Medspa clinician you can be sure that we are receiving the best recommendations and care available. We also provide occupational health care for early treatment of employee injuries.</div>
                <button>Learn More</button>
            </Content>
                </div>
            <div className="gridLayout threeGrid">
                <Content
                    title="Thermage"
                    backgroundColor="rgba(0,0,0,0.1)">
                    <div>Thermage is a non-invasive procedure that can help tighten and contour your skin without injections or surgery. Thermage employs radiofrequency technology to heat the deep layers of skin while keeping the top layer cool and undamaged.</div>
                    <button>More</button>
                </Content>
                <Content
                    title="LUX1540-Fractional Laser"
                    backgroundColor="rgba(0,0,0,0.2)">
                    <div>LUX 1540 Fractional Laser is a dye-free skin resurfacing treatment designed to reduce the appearance of skin imperfections such as lines, wrinkles, acne scars, sun damage, hyperpigmentation, and stretch marks.</div>
                    <button>More</button>
                </Content>
                <Content
                    title="BOTOX"
                    backgroundColor="rgba(0,0,0,0.3)">
                    <div>BOTOX® Cosmetic is an injection administered to muscles in the forehead to reduce the appearance of moderate to severe frown lines between the eyebrows. BOTOX® Cosmetic is a prescription medication that blocks nerve impulses to the muscles between the brows, reducing wrinkle-causing muscle activity.</div>
                    <button>More</button>
                </Content>
            </div>
            <Content
                image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                title="Social Media Links"
                backgroundColor="rgba(0,0,0,0.5)"
                ></Content>
        </div>
    </div>
);

export default Home;
