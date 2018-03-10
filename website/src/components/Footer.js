import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Content from '../components/Content';

import '../styles/footer.css'

export default class Footer extends Component {
  render(){
    return (
      <div className="footer">
          <div className="formWrapper">
          <form id="contactUs">
            <input type="email" placeholder="Email" size={200} ref={"email"}/>
            <input type="text" placeholder="Name" ref={"name"}/>
            <input type="text" placeholder="Subject" ref={"subject"}/>
            <textarea placeholder="Message" rows="10" ref={"message"}></textarea>
            <button className="white">Submit</button>
          </form>
        </div>
        <p>Lee Mac</p>
        <p>42650 Christy Street, Fremont, CA 94538</p>
        <p>(510) 226 - 8832</p>
        <p>info@leemac.biz</p>
      </div>
    );
  }
}
