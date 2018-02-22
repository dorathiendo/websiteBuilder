import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

import MedSpa from './pages/MedSpa';
import HealthClinic from './pages/HealthClinic';
import DaySpa from './pages/DaySpa';
import Specials from './pages/Specials';
import Ask from './pages/Ask';
import Education from './pages/Education';
import Contact from './pages/Contact';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/medspa' component={MedSpa}/>
            <Route path='/healthclinic/:service?' component={HealthClinic}/>
            <Route path='/dayspa/:service?' component={DaySpa}/>
            <Route exact path='/specials' component={Specials}/>
            <Route exact path='/ask' component={Ask}/>
            <Route exact path='/education' component={Education}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    </main>
);

export default Main;
