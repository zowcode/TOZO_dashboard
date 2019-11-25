import React from 'react';
import { Component } from "react";
import '../App.css';
import TaskList from './TaskList';

/// DONNÉES EN DUR DE TASK

const defaultTasks = {
    task1: {
      id: "1",
      nom: "tache 1",
      type: "1"
    },

    task2: {
        id: "2",
        nom: "",
        type: "B."
      },
  }

class Widget1 extends Component {
     // CONSTRUCTEUR
    constructor(props) {

    super(props);}
     // STATE: données internes du composant
     
    render() {
        this.type=this.props.type;
        return (
            <div className="Widget1">
                 <div className="widgetName"> {this.props.nom} </div>
                
            
            </div>
        );
    }
  
}
export default Widget1;
