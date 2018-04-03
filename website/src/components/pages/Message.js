import React, { Component } from 'react';

import Content from '../../components/Content.js';
import Utils from '../utils/Utils';


export default class Message extends Component {
    render() {
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <Content
                        backgroundColor="rgba(0,0,0,0.5)"
                        padding="50px 10%"
                        color="white">
                        <div>
                            <h2>Message</h2>
                            <p>{this.props.match.params.message}</p>
                        </div>
                    </Content>
                </div>
            </div>
        );
    }
}