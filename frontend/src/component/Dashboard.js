import React from 'react';
import { Component } from "react";
import '../App.css';
import Widget from './Widget.js';
import Widget1 from './Widget1';
import Widget2 from './Widget2';

class Dashboard extends Component {

    // CONSTRUCTEUR
    constructor(props) {

        super(props);
        // STATE: données internes du composant
        this.state = {
      
            widget1 : 
            {
               nom: "widget1",
               type: "1",
               content: "blablablaabalabl"
            },
        
            widget2 : 
            {
                nom: "widget2",
                type: "2",
                content: "blablablaabalabl"
            },

            widget3 : 
            {
                nom: "widget3",
                type: "3",
                content: "blablablaabalabl"
            },

            widget4: 
            {
                nom: "widget4",
                type: "4",
                content: "blablablaabalabl"
            },

            widget5 : 
            {
                nom: "widget5",
                type: "5",
                content: "blablablaabalabl"
            },
            widget6 : 
            {
                nom: "widget6",
                type: "6",
                content: "blablablaabalabl"
            }
        };
    
    }


    // CALL API
    render() {
        return (
            <div>
                <div className="row pageName">
                    <h1> DASHBOARD </h1>
                </div>

                <div className="row widgetContainer">

                    <div className="col">
                        <Widget1 nom={this.state.widget1.nom}
                        type={this.state.widget1.type}
                        content={this.state.widget1.content} >  
                        </Widget1>
                    </div>
                    <div className="col">
                        <Widget2 nom={this.state.widget2.nom} >  
                        </Widget2>
                    </div>
                    <div className="col">
                        <Widget nom={this.state.widget3.nom}
                        type={this.state.widget3.type}
                        content={this.state.widget3.content} >  
                        </Widget>
                    </div>

                    </div>
                <div className="row widgetContainer">
                    <div className="col">
                        <Widget nom={this.state.widget4.nom}
                        type={this.state.widget4.type}
                        content={this.state.widget4.content} >  
                        </Widget>
                    </div>
                    <div className="col">
                        <Widget nom={this.state.widget5.nom}
                        type={this.state.widget5.type}
                        content={this.state.widget5.content} >  
                        </Widget>
                    </div>
                    <div className="col">
                        <Widget nom={this.state.widget6.nom}
                        type={this.state.widget6.type}
                        content={this.state.widget6.content} >  
                        </Widget>
                    </div>
                </div>

            </div>
        );
    }
}

export default Dashboard;
