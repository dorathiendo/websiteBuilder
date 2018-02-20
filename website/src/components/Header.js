import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

var jsonData = {
    'navigationLinks': [
        {
            'name': 'MedSpa',
            'link': 'medspa',
            'className': 'bold',
            'subNav': [
                {
                    name: 'Thermage',
                },
                {
                    name: 'Liposuction'
                },
                {
                    name: 'Smart Lipo'
                },
                {
                    name: 'Vaser LipoSelection'
                },
                {
                    name: 'LUX1540-fractional laser'
                },
                {
                    name: 'LUXV-acne treatment'
                },
                {
                    name: 'More...'
                }
            ]
        },
        {
            'name': 'Health Clinic',
            'className': 'bold',
        },
        {
            'name': 'DaySpa',
            'className': 'bold',
        },
        {
            'name': 'Specials'
        },
        {
            'name': 'Ask Dr. Lee'
        },
        {
            'name': 'Education'
        },
        {
            'name': 'Contact Us'
        },
    ]
};


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            showSideNavigation: false
        };
        this.openSideNavigation = this.openSideNavigation.bind(this);
    }
    componentWillMount() {
        this.setState({
            data: jsonData.navigationLinks
        }, function(){
            console.log(this.state.data.navigationLinks);
        });
    }
    renderSubNav() {
        return this.state.data.map(navLink => {
            var subNav = '', className = '';
            if(navLink.subNav){
                subNav = navLink.subNav.map((subNav) => <li><a href="">{subNav.name}</a></li>);
            }
            var className = (navLink.className) ? navLink.className : '';
            var link = (navLink.link) ? navLink.link : '';
            return <li className={className}>
                <Link to={'/' + link}>{navLink.name}</Link>
                <ul className="subNav">{subNav}</ul>
                </li>
        });
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
                <ul className={(this.state.showSideNavigation) ? 'nav brackets active' : 'nav brackets'}>
                    <li>
                        <button className="menuButton"
                                onClick={this.openSideNavigation}>Menu</button>
                    </li>
                    {this.renderSubNav()}
                </ul>
                <button className="menuButton"
                        onClick={this.openSideNavigation}>Menu</button>
            </div>
        );
    }
}