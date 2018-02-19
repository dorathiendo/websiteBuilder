import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

var jsonData = {
    'navigationLinks': [
        {
            'name': 'MedSpa',
            'subNav': [
                {
                    name: 'Thermage',
                },
                {
                    name: 'Liposuction'
                }
            ]
        },
        {
            'name': 'Health Clinic'
        },
        {
            'name': 'DaySpa'
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
        };
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
            console.log('navLink:' + navLink.subNav);
            var subNav = '';
            if(navLink.subNav){
                subNav = navLink.subNav.map(subNav => <li><a href="">{subNav.name}</a></li>);
            }
            return <li>
                <Link to='/'>{navLink.name}</Link>
                <ul className="subNav">{subNav}</ul>
                </li>
        });
    }
    render() {
        return (
            <div className="header">
                <h1>{this.props.name}</h1>
                <ul className="nav brackets">
                    {this.renderSubNav()}
                </ul>
            </div>
        );
    }
}