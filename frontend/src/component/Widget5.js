import React, { PureComponent, Component } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import '../App.css';
import Forecast from "./Forecast";


export default class Widget5 extends Component {

  state = {
  
  };


  render() {
    return (
        <div className="widget">   
            <div className="widgetName"> {this.props.nom} </div>
            <Forecast city={"paris"} />
        </div>
    );
  }
}
