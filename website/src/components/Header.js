import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css'

import data from './data/headerData.json';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideNavigation: false
        };
        this.openSideNavigation = this.openSideNavigation.bind(this);
    }
    componentWillMount() {
    }
    renderSubNav() {
        return data.navigationLinks.map(navLink => {
            var subNav = '', className = '', arrow  = '';
            if(navLink.subNav){
                arrow = <img className="subNavArrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGESURBVHhe7dHPTcMwGIfh3GEJLogxmAAJFmECxDZIrMEmjMEJ3KqfQCVt4/xxnOR5pJ8sX3zw2wAAAAAAAAAAAABNc3s46efucI7iIe0r7XV/I9dj2u7/Xva3gSLG92Gi5IkY8X+DohzHiInSzXGMWK8o92ltj8VEOe9UjNhzWpartI+0tsdiorS7FOMz7SYtmyj5JosRROlu8hhBlMuKxQiinFY8RhDlv9liBFF+zR4jiFJRjLDlKNXFCFuMUm2MsKUo1ccIW4iymBhhzVEWFyOsMcpiY4TrtLVEWXyMsIYoq4kRlhxldTHCEqOsNkZYUpTVxwhLiLKZGKHmKJuLEWqMstkYoaYom48RaogixpE5o4hxwhxRxLigZBQxOioRRYxMU0Z5ShOjhymiiDHQmFHEGMkYUcQY2ZAoYkykTxQxJpYTRYxCukR5TxOjoC5RTk2MifSJIsbEcqKIUUiXKGIUdi6KGDNpiyLGzP5GEaMSuyhvaWIAAAAAAAAAAAAAZGiaHx2luEHL0nIVAAAAAElFTkSuQmCC"/>
                subNav = navLink.subNav.map((subNav) => <li><a href={'/'+navLink.link+'/'+subNav.link}>{subNav.name}</a></li>);
            }
            var className = (navLink.className) ? navLink.className : '';
            var link = (navLink.link) ? navLink.link : '';
            return <li className={className}>
                <Link to={'/' + link}>{navLink.name}</Link>
                <ul className="subNav">{subNav}</ul>
                    {arrow}
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
                <ul className={(this.state.showSideNavigation) ? 'nav active' : 'nav'}>
                    <li>
                        <div className="menuButton"
                                onClick={this.openSideNavigation}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC+SURBVHhe7duxjUIxFEXBH1IABSC0BVAAbdATLdATPS2WY4dIPkIz0okc3vT5AAAAAADgR1yV6TQ6/pXpPlo+aE8GiWWQWAaJZZBYBollkFgGiTUHeSvTbQQAAAAAAABAx0OZzqPl9YP25AwolkFiGSSWQWIZJJZBYhkklkFizUGeynQZAQAAAAAAANDxUqa/0fL6QXtyBhTLILEMEssgsQwSyyCxDBLLILHmIKv/0trT/KcOAAAAAAB80XF8AFB/e7hE7WJ2AAAAAElFTkSuQmCC"/>
                        </div>
                    </li>
                    {this.renderSubNav()}
                </ul>
                <div className="menuButton"
                     onClick={this.openSideNavigation}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC+SURBVHhe7duxjUIxFEXBH1IABSC0BVAAbdATLdATPS2WY4dIPkIz0okc3vT5AAAAAADgR1yV6TQ6/pXpPlo+aE8GiWWQWAaJZZBYBollkFgGiTUHeSvTbQQAAAAAAABAx0OZzqPl9YP25AwolkFiGSSWQWIZJJZBYhkklkFizUGeynQZAQAAAAAAANDxUqa/0fL6QXtyBhTLILEMEssgsQwSyyCxDBLLILHmIKv/0trT/KcOAAAAAAB80XF8AFB/e7hE7WJ2AAAAAElFTkSuQmCC"/>
                </div>
            </div>
        );
    }
}