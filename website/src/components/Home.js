import React, { Component } from 'react';
import AnimatedWrapper from "./AnimatedWrapper";
import Content from '../components/Content.js';



class Home extends Component {
    render(){
        return (
            <div className="contentSection">
                <Content
                    image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                    title="Here is a title"
                    content="This is my content"
                    ></Content>
            </div>
        )
    }
}

const HomeComponent = AnimatedWrapper(Home);
export default HomeComponent;