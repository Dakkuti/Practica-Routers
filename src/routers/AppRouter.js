import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import React from 'react'
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { Heroes } from "../components/Heroes";
export const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Router>
                <Route exact path="/Heroes" component={Heroes} />
                <Route exact path="/" component={Login} />
            </Router >
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
