import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import pageAPI from './pageAPI';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/pageAPI" exact component={pageAPI} />
      </Switch>
    );
  }
}