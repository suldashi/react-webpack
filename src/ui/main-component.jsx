import React from "react";
import { Switch, Route, Link } from 'react-router-dom'
import { HomeComponent } from './home-component';
import { NotFoundComponent } from './not-found-component';

const io = require("socket.io-client");

export function MainComponent() {
    const socket = io();
    return <div>
        <Switch>
            <Route exact path="/" render={() => <HomeComponent {...socket} />} />
            <Route exact path="*" render={() => <NotFoundComponent {...socket} />} />
        </Switch>
    </div>;
}
