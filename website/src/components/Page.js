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
          <div >
            <div>
                <div className="gridLayout twoGrid">
                    <Content
                        image={serviceData.image? serviceData.image:data.header.headerImageSrc}>
                        <h2>{serviceData.title}</h2>
                    </Content>
                    <Content>
                        <div dangerouslySetInnerHTML={{__html: data.services[param].info}}></div>
                    </Content>
                </div>


            </div>
            <div class="videoList">
            {serviceData.videos && this.renderVideoList(serviceData.videos)}
            </div>
          </div>
        )
    }

    renderVideoList(videoList){
      const items = videoList.map((i) => {
        return (
          <video id='medSpa_player' class='video-js' controls preload='auto' poster={i.poster} data-setup='{}'>
            <source src={i.source} type='video/mp4'></source>
            <source src={i.source} type='video/webm'></source>
            <source src='//vjs.zencdn.net/v/oceans.ogv' type='video/ogg'></source>
            <p class='vjs-no-js'>To view this video please enable JavaScript, and consider upgrading to a web browser that <a href='http://videojs.com/html5-video-support/' target='_blank'> supports HTML5 video </a></p>
          </video>
      )
      });
      return items;
    }

    renderServiceLinks(data) {
        let links = Object.keys(data.services).map(key => {
            return (
                <Content
                minHeight="auto">
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
