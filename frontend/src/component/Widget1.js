import React, { Component } from "react";
//import Widget1Items from "./Widget1Items.js";
import './Widget1.css';

class ListPays extends Component {
  constructor(props) {
    super(props);

  }
   

  render() {
    return (
      
      <div className="widget todoListMain">

        <div className="header">
        Liste des pays
        </div>
       
          <ul>
            {this.props.locations.map(item => (
                <div  className="header" key={item}>{item}</div>
            ))}
          </ul>
       
      </div>
    );
  }
}
 
export default ListPays;