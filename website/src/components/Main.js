import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from '../components/About.js';
import Color from '../components/Color.js';
import Bw from '../components/Bw.js';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/color' component={Color}/>
            <Route exact path='/bw' component={Bw}/>
        </Switch>
    </main>
);

export default Main;
