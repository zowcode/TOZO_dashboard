import React from 'react';
import '../App.css';
import Widget from './Widget.js';

function Dashboard() {
  return (
    <div>
         <div className="row pageName">
            <h1> DASHBOARD </h1>
         </div>

        <div className="row">

            <div className="col">
                <Widget></Widget>
            </div>
            <div className="col">
                <Widget></Widget>
            </div>
            <div className="col">
                <Widget></Widget>
            </div>

            </div>
            <div className="row ">
            <div className="col">
                <Widget></Widget>
            </div>
            <div className="col">
                <Widget></Widget>
            </div>
            <div className="col">
                <Widget></Widget>
            </div>
         </div>

    </div>
  );
}

export default Dashboard;
