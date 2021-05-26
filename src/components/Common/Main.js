import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Home from '../Home/Home'

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default Main;