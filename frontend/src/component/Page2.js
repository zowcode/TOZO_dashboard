
import React from 'react';
import { Component } from "react";
import Dashboard from './Dashboard.js';
import ProfilBar from './ProfilBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';


class Page2 extends Component {

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

        </div>
      </div>
    );
  }
}

export default Page2;
