import React, { Component } from 'react';
import Page from '../../components/Page';

import Content from '../../components/Content.js';


export default class Membership extends Component {
    render() {
       let data = {
         services: [],
         header: {
           headerImageSrc: "https://images.pexels.com/photos/3190/makeup-beauty-lipstick-make-up.jpg?w=1260&h=750&auto=compress&cs=tinysrgb"
         }
       };
        return (
          <div className="contentSection">
              <div className="contentWrapper">
                  <div>
                      <Content
                          image={data.header.headerImageSrc}
                          backgroundColor="rgba(0,0,0,0.5)"
                          padding="50px 10%"
                          color="white">
                          <div>
                              <h2>Membership</h2>
                              <p>Coming Soon</p>
                          </div>
                      </Content>
                      <Content>
                      <h2>Join our email list for regular updates on promotions and event offers!</h2>
                      <div className="formWrapper">
                      <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <button className="white">Submit</button>
                      </form>
                      </div>
                      </Content>
                  </div>
              </div>
          </div>
        );
    }
}
