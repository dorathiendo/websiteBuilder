import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/imageSlider.css'


export default class ImageSlider extends Component {
    constructor(props){
        super(props);
        this.images = [];
        this.controls = [];
        this.sliderControls = this.sliderControls.bind(this);
    }

    sliderControls(event){
        if(event.target.className == 'rightButton'){
            var currentEl = ReactDOM.findDOMNode(this).getElementsByClassName('active')[0];
            currentEl.className = '';
            var nextEl = ReactDOM.findDOMNode(this).getElementsByClassName('hidden')[0];
            nextEl.className = 'active';
            currentEl.className = 'hidden';

        } else {

        }
    }
    renderControls(){
        var controls = [];
        for(var i = this.props.children.length-1; i >= 0; i--){
            if(i === this.props.children.length-1){
                controls.push(<div className="controlButton active" index={i} onClick={this.sliderControls.bind(null, i)} ref={c => this.controls.push(c)}></div>);
            } else {
                controls.push(<div className="controlButton" index={i} onClick={this.sliderControls.bind(null, i)} ref={c => this.controls.push(c)}></div>);
            }
        }
        return controls;
    }
    renderChildren(){
        var children = [];
        for(var i = 0; i < this.props.children.length; i++){
            var className = '';
            if(i === 0){
                className = 'active';
            } else {
                className = 'hidden';
            }
            children.push(<img className={className} src={this.props.children[i].props.src} index={i} ref={c => this.images.push(c)} />)
        }
        return children;
    }
    render(){
        return (
            <div className="imageSlider">
                {this.renderChildren()}
                <div className="controls">
                    <img onClick={this.sliderControls} className="leftButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFlSURBVHhe7dshbtRBHIbhJcUsFU1QcAcc5Ry9QGXPAEeCUyCxSCSO2p4A+P1JMZtdu/OmfZ7ky2T0m4ybHQAA8FxdPp4s9mb2bfZn9nW2n7HIFuPHbIvxf7czFjgWY9vNjDM7FePz7MWMMzoV48vsYsYZiREiRogYIWKEiBEiRogYIWKEiBEiRogYIWKEiBHydiZGhBghYoSIESJGiBghYoSIESJGiBghYoSIESJGiBghYoSIESJGyKkY2/8MMc5MjBAxQsQIESPk5ez7TIyId7PDGFsgMRZ5NbufHUb5NGORD7OHmSghogSJEiRKkChBogSJEiRKkChBogSJEiRKkChBogRdz0SJESVIlCBRgkQJEiVIlCBRgkQJEiVIlCBRgkQJEiVIlCBRgkQJEiVIlCBRgkQJEiXoVJSPMxY5FuX37P2MRY5FuZux0Bbl12yL8XP2esZiV7Ptqdr/uwEAADxpu91fhIzG4NQU6FkAAAAASUVORK5CYII="/>
                    <img onClick={this.sliderControls} className="rightButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFdSURBVHhe7d0xSl1RGEbRp6WdXcAmvTaBOAjnEM0kJBmIA3AkGUqmEFMFIYr+T1I8RMu8s4u14ONyTrs59d0AAAD/y9G/LwE3s8fZz9nn7QXrnM6edvZ7JspCH2fb1yFKyPVsN4goAd9nosR8m4kSI0qQKEGiBIkSJEqQKEGiBIkSJEqQKEGiBIkSJEqQKEGiBIkSJEqQKEGiBIkS9F6U8xmLiBIkSpAoQaIEiRIkSpAoQaIEiRIkSpAoQaIEiRL0VpS72cmMRW5nr6N8nbHAxex+thvj7+xsxp69FeNhdjVjz8QIESNEjBAxQsQIeS/G5Yw9EyNEjBAxQsQIESNEjBAxQsQIESNEjBAxQsQIESNEjBAxQsQIESNEjBAxQsQIESNEjBAxQsQIESNEjBAxQsQIESNEjJDj2a+ZGBGv/6cuxmIHsx+zbYw/sy8zFjucfZp9eDkBAACw0GbzDK5nxuSPOeHiAAAAAElFTkSuQmCC"/>
                </div>
            </div>
        )
    }
}