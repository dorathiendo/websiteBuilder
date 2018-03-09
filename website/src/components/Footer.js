import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/footer.css'

export default class Footer extends Component {
    render(){
      return (
        <div className="footer">
          <p>Lee Mac</p>
          <p>42650 Christy Street, Fremont, CA 94538</p>
          <p>(510) 226 - 8832</p>
          <p>info@leemac.biz</p>
        </div>
      );
    }
}
