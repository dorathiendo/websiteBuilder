import React, { Component } from 'react';
import '../styles/imageSlider.css'


export default class ImageSlider extends Component {
    constructor(props){
        super(props);
        this.images = [];
        this.controls = [];
        this.sliderControls = this.sliderControls.bind(this);
    }

    sliderControls(index){
        console.log(this.controls);
        this.images[index+1].className = 'hide';
        console.log(this.controls[index+1]);
        this.controls[index+1].className = 'controlButton';
        this.controls[index].className = 'controlButton active';
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
            children.push(<img src={this.props.children[i].props.src} index={i} ref={c => this.images.push(c)} />)
        }
        return children;
    }
    render(){
        return (
            <div className="imageSlider">
                {this.renderChildren()}
                <div className="controls">
                    {this.renderControls()}
                </div>
            </div>
        )
    }
}