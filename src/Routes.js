import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Add from "./Components/Add";
import List from "./Components/List";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={List} />
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/edit/:id"  component={Add} />
                </Switch>
            </Router>
        )
    }
}