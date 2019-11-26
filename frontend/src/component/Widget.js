import React from 'react';
import { Component } from "react";
import '../App.css';

class Widget extends Component {
    render() {
        this.type=this.props.type;
        return (
            <div className="widget">
                <div className="widgetName"> {this.props.nom} </div>
                <div className="widgetType"> {this.props.type} </div>
                <div className="widgetContent"> {this.props.content} </div>
            </div>
        );
    }
  
}
export default Widget;
