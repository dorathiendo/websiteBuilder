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
                            <p>View our monthly specials to help you look your best, for less.</p>
                            </div>
                        </Content>
                    </div>
                    <div className="gridLayout fourGrid">
                      <Content>
                        <p style={{border: '3px solid white'}}>Get prepared for Spring Smart Lipo or Viso Lipo!</p>
                      </Content>
                      <Content>
                        <p style={{border: '3px solid white'}}>Muffin top, love handles, or potbelly - all sound harmless enough. But these bothersome bumps can really put a lump in your self-esteem.</p>
                      </Content>
                      <Content>
                        <p style={{border: '3px solid white'}}>Spring into a minimally invasive, FDA approved, relatively painless, and safe procedure to remove unwanted body fat and start winning the battle of the bulge with Smart Lipo or Vaser Lipo, which destroy fat and tighten skin. Get the slim down look you want today, don't leave it to fat chance tomorrow! Call us and find out about our nice trim deals.</p>
                      </Content>
                      <Content>
                        <p style={{border: '3px solid white'}}>Get your skin ready for summer. Call us and schedule your appointment today. BizMed Spa 510-226-8832</p>
                      </Content>
                    </div>
                </div>
            </div>
        );
    }
}
