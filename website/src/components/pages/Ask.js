import React, { Component } from 'react';

import Content from '../../components/Content.js';
import Utils from '../utils/Utils';


export default class Ask extends Component {
    submit(e){
        e.preventDefault();

        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].value;
        }
        Utils.serverComm('/server/ask', formData, function(response){
           console.log(response);
        });
    }

    render() {
        return (
            <div className="contentSection">
                <div className="contentWrapper">
                    <Content
                        image="https://image.shutterstock.com/z/stock-photo-pile-of-questions-marks-d-render-541688104.jpg"
                        backgroundColor="rgba(0,0,0,0.5)"
                        padding="50px 10%"
                        color="white">
                        <div>
                            <h2>Ask Dr. Lee</h2>
                            <p>If you have any questions, please feel free to email them to me.</p>
                        </div>
                    </Content>
                    <Content>
                        <form id="ask_dr_lee">
                            <input type="text" placeholder="Email" size={200} ref={"email"}/>
                            <input type="text" placeholder="Name" ref={"name"}/>
                            <input type="text" placeholder="Subject" ref={"subject"}/>
                            <textarea placeholder="Message" rows="10" ref={"message"}></textarea>
                            <button className="black" onClick={this.submit.bind(this)}>Submit</button>
                        </form>
                    </Content>
                </div>
            </div>
        );
    }
}
