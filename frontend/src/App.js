import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard.js';
import APIpage from './component/APIpage.js';
import ProfilBar from './component/ProfilBar.js';

function App() {
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

export default App;
