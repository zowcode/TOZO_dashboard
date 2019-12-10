import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter , Link} from 'react-router-dom';
import Dashboard from './Dashboard';
import pageAPI from './pageAPI.js';

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