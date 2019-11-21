import React from 'react';
import { Component } from "react";
import './App.css';
import Dashboard from './component/Dashboard.js';
import APIpage from './component/APIpage.js';
import ProfilBar from './component/ProfilBar.js';

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

        <div className = " profilBar col col-2 col-lg-2 col-md-2 col-sm-2">
          <ProfilBar></ProfilBar>
        </div>
        <div className = "col col-10 col-lg-10 col-md-10 col-sm-10">
           <Dashboard ></Dashboard>
       </div>

      </div>
    );
  }
}

export default App;
