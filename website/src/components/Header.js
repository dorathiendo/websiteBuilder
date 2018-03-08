import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

import data from './data/headerData.json';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideNavigation: false,
            showSubNavigation: false
        };
        this.openSideNavigation = this.openSideNavigation.bind(this);
    }
    componentWillMount() {
    }
    renderSubNav() {
        return data.navigationLinks.map(navLink => {
            var subNav = '', className = '', arrow  = '';
            if(navLink.subNav){
                arrow = <img className="subNavArrow" src="/images/arrow_down.png" onClick={((e) => this.openSubNav(e))}/>
                subNav = navLink.subNav.map((subNav) => <li><a href={'/'+navLink.link+'/'+subNav.link}>{subNav.name}</a></li>);
            }
            var className = (navLink.className) ? navLink.className : '';
            var link = (navLink.link) ? navLink.link : '';
            return <li className={className}>
                <a href={'/' + link}>{navLink.name}</a>
                {arrow}
                <ul className="subNav">{subNav}</ul>
                </li>
        });
    }
    openSubNav(e){
        var subNavEl =  e.target.parentElement.getElementsByClassName('subNav')[0];
        if(subNavEl.className.indexOf('showSubNav') > 0){
            subNavEl.className = 'subNav';
        } else {
            subNavEl.className = 'subNav showSubNav';
        }
    }
    openSideNavigation(){
        this.setState(prevState => ({
            showSideNavigation: !prevState.showSideNavigation
        }));
    }
    render() {
        return (
            <div className="header">
                <h1><Link to='/'>{this.props.name}</Link></h1>
                <ul className={(this.state.showSideNavigation) ? 'nav active' : 'nav'}>
                    <li>
                        <div className="menuButton"
                                onClick={this.openSideNavigation}>
                            <img src="/images/menu.png"/>
                        </div>
                    </li>
                    {this.renderSubNav()}
                </ul>
                <div className="menuButton"
                     onClick={this.openSideNavigation}>
                    <img src="/images/menu.png"/>
                </div>
            </div>
        );
    }
}