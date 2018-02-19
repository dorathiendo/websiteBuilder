import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./AnimatedSwitch";

import Home from './Home';
import About from './About.js';

const firstChild = props => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
};

const Main = ({ location }) => (
    <main>
        <TransitionGroup component="main">
            <AnimatedSwitch
                key={location.key}
                location={location}
                >
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/about"
                    component={About}
                    />
            </AnimatedSwitch>
        </TransitionGroup>
    </main>
);

export default Main;


//<Switch>
//    <Route exact path='/'
//           children={({ match, ...rest }) => (
//                <TransitionGroup component={firstChild}>
//                  {match && <Home {...rest} />}
//                </TransitionGroup> )}
//        />
//    <Route exact path='/about'
//           children={({ match, ...rest }) => (
//                     <TransitionGroup component={firstChild}>
//                       {match && <About {...rest} />}
//                     </TransitionGroup> )}
//        />
//</Switch>