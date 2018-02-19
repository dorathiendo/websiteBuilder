import React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/Transition';
import logo from '../logo.svg';
const PageShell = Page => {
    return props =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName="SlideIn"
                >
                <img src={logo} alt="" />
                <Page key="transition-group-content" {...props} />
            </ReactCSSTransitionGroup>
        </div>;
};
export default PageShell;