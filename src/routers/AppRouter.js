import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import React from 'react'
import { Login } from "../components/Login";
import { Navbar } from "../components/Navbar";
import { inicio } from "../components/inicio";
export const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Router>
                <Route exact path="/" component={inicio} />
                <Route exact path="/Login" component={Login} />
            </Router >
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
