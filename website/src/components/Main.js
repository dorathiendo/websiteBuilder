import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';

import MedSpa from './pages/MedSpa';
import HealthClinic from './pages/HealthClinic';
import DaySpa from './pages/DaySpa';
import Specials from './pages/Specials';
import Ask from './pages/Ask';
import Education from './pages/Education';
import Contact from './pages/Contact';
import Membership from './pages/Membership';
import Store from './pages/Store';
import Appointments from './pages/Appointments';
import Message from './pages/Message';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/medspa/:service?' component={MedSpa}/>
            <Route path='/healthclinic/:service?' component={HealthClinic}/>
            <Route path='/dayspa/:service?' component={DaySpa}/>
            <Route exact path='/specials/:service?' component={Specials}/>
            <Route exact path='/ask' component={Ask}/>
            <Route exact path='/education' component={Education}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/membership' component={Membership}/>
            <Route exact path='/store' component={Store}/>
            <Route exact path='/appointment' component={Appointments}/>
            <Route exact path='/message/:message' component={Message}/>
        </Switch>
    </main>
);

export default Main;
