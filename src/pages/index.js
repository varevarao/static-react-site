import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home';

const Pages = () => (
    <Router>
        <Switch>
            {/* Home page */}
            <Route exact path="/" component={HomePage} />
            {/* Redirect to home, if not a known path */}
            <Redirect to="/" />
        </Switch>
    </Router>
)

export default Pages;