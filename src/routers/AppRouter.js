import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import React from 'react'
import { Heroes } from "../components/Heroes";
import { Navbar } from "../components/Navbar";


export const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Router>
                <Route exact path="/" component={Navbar} />
                <Route exact path="/Heroes" component={Heroes} />
            </Router >
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
