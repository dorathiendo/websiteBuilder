import React, { Component } from 'react';
import Page from '../../components/Page';

import Content from '../../components/Content.js';


export default class Specials extends Component {
    render() {
       let data = {
         services: [],
         header: {
           headerImageSrc: 'https://image.shutterstock.com/z/stock-photo-beauty-portrait-of-female-face-with-natural-skin-521859244.jpg'
         }
       };
        return (
          <div className="contentSection">
              <div className="contentWrapper">
                  <div>
                      <Content
                          backgroundColor="rgba(0,0,0,0.5)"
                          padding="50px 10%"
                          color="white">
                          <div>
                              <h2>Specials</h2>
                              <p>Coming Soon</p>
                          </div>
                      </Content>
                      <Content>
                        <h2>Join our email list for regular updates on promotions and event offers!</h2>
                        <form>
                          <input type="text" placeholder="Name" />
                          <input type="email" placeholder="Email" />
                          <button className="black">Submit</button>
                        </form>
                      </Content>
                  </div>
              </div>
          </div>
        );
    }
}
