import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Content from '../components/Content';
import ServiceLink from '../components/ServiceLink';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContent: ''
        }
    }
    componentDidMount() {
        document.title = "Lee Mac - " + this.props.pageName;
    }
    renderSublink(param, data) {
        var serviceData = data.services[param];
        return (
            <div className="gridLayout twoGrid">
                <Content
                    image={data.header.headerImageSrc}>
                    <h2>{serviceData.title}</h2>
                </Content>
                <Content>
                    <div dangerouslySetInnerHTML={{__html: data.services[param].info}}></div>
                </Content>
            </div>
        )
    }

    renderServiceLinks(data) {
        let links = Object.keys(data.services).map(key => {
            return (
                <Content>
                    <ServiceLink
                        title={data.services[key].title}
                        link={'/' + this.props.linkName + '/' + key}
                        >
                        <div dangerouslySetInnerHTML={{__html: data.services[key].info}}></div>
                    </ServiceLink>
                </Content>
            );
        });
        return (
            <div className="gridLayout fourGrid">
                {links}
            </div>
        )
    }

    renderContentArea(param, data) {
        if (param) {
            return this.renderSublink(param, data);
        }
        return this.renderServiceLinks(data);
    }
    render(){
        let serviceParam = this.props.serviceParam;
        var data = this.props.data;
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
                                <h1>{this.props.pageName}</h1>
                                <p>{data.header.info}</p>
                            </div>
                        </Content>
                    </div>
                    {this.renderContentArea(serviceParam, data)}
                </div>
            </div>
        );
    }
}
