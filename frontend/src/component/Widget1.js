import React, { Component } from "react";
//import Widget1Items from "./Widget1Items.js";
import './Widget1.css';

class ListPays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };


  }
   

  render() {
    return (
      
      <div className="widget todoListMain">
        TO DO LIST
        <div className="header">
        Liste des pays
        </div>
      </div>
    );
  }
}
 
export default ListPays;