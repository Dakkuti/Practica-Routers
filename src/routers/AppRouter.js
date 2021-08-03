import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import React from 'react'


export const AppRouter = () => {
    return (
        <Router>
        <Switch>
            <Router>
                <Route exact path="/" component={Navbar} />
            </Router >
            <Redirect to="/" />
        </Switch>
    </Router>
    )
}
