import React from 'react';

import Content from '../components/Content.js';



const Home = () => (
    <div className="contentSection">
        <div className="contentWrapper">
            <div>
            <Content
                image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                title="Here is a title"
                content="This is my content"
                backgroundColor="rgba(0,0,0,0.5)"
                >
                <div>This is my content</div>
                <button>Learn More</button>
            </Content>
                </div>
            <div className="gridLayout threeGrid">
                <Content
                    title="Here is a title"
                    content="This is my content"
                    backgroundColor="rgba(0,0,0,0.1)"
                    ></Content>
                <Content
                    title="Here is a title"
                    content="This is my content"
                    backgroundColor="rgba(0,0,0,0.2)"
                    ></Content>
                <Content
                    title="Here is a title"
                    content="This is my content"
                    backgroundColor="rgba(0,0,0,0.3)"
                    ></Content>
            </div>
            <Content
                image="https://farm5.staticflickr.com/4609/39525471044_458999e8e0_z.jpg"
                title="Here is a title"
                content="This is my content"
                backgroundColor="rgba(0,0,0,0.5)"
                ></Content>
        </div>
    </div>
);

export default Home;