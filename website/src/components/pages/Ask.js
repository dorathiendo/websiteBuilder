import React, { Component } from 'react';

import Content from '../../components/Content.js';


export default class Ask extends Component {
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
                        <form action="">
                            <input type="text" placeholder="Email"/>
                            <input type="text" placeholder="Name"/>
                            <input type="text" placeholder="Subject"/>
                            <textarea placeholder="Message" rows="10"></textarea>
                            <button className="black">Submit</button>
                        </form>
                    </Content>
                </div>
            </div>
        );
    }
}
