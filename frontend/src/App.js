import React from 'react';
import { Component } from "react";
import './App.css';
import Dashboard from './component/Dashboard.js';
import APIpage from './component/APIpage.js';
import ProfilBar from './component/ProfilBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profil: 1
      
    };
  }

  render() {
    return (
      <div className="row principal " >

        <div className = " profilBar col col-1 col-lg-1 col-md-1 col-sm-1">
          <ProfilBar></ProfilBar>
        </div>
        <div className = "col col-11 col-lg-11 col-md-11 col-sm-11">
           <Dashboard ></Dashboard>
       </div>

      </div>
    );
  }
}

export default App;
