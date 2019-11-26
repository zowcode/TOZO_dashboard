import React, { Component } from "react";
import Widget1Items from "./Widget1Items.js";
import './Widget1.css';

class Widget1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }
   
  addItem(e) {

    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem) 
        };
      });
     
      this._inputElement.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
 
  }
   
  render() {
    return (
      
      <div className="widget todoListMain">
        TO DO LIST
        <div className="header">
          <form onSubmit={this.addItem}>
            
            <input
            ref={(a) => this._inputElement = a} 
             placeholder="A faire">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <Widget1Items entries={this.state.items}/>
      </div>
    );
  }
}
 
export default Widget1;