import React from 'react';
import { Component } from "react";
import '../App.css';
import Widget from './Widget.js';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';
import Widget6 from './Widget6';

/// Pour tapper dans API:
import axios from "axios";



class Dashboard extends Component {

    // CONSTRUCTEUR
    constructor(props) {

        super(props);
        // STATE: données internes du composant
        this.state = {

            info: "nulle",
            
            widget1 : 
            {
               nom: "Todolist",
               type: "1",
               content: "blablablaabalabl"
            },
        
            widget2 : 
            {
                nom: "Température",
                data: "aerin",
                type: "2",
                content: "blablablaabalabl"
            },

            widget3 : 
            {
                nom: "Humidité",
                type: "3",
                content: "blablablaabalabl"
            },

            widget4: 
            {
                nom: "Pollution de l'air",
                type: "4",
                content: "blablablaabalabl"
            },

            widget5 : 
            {
                nom: "Météo",
                type: "5",
                content: "blablablaabalabl"
            },
            widget6 : 
            {
                nom: "?",
                type: "6",
                content: "blablablaabalabl"
            }
        };
    
    }


    // CALL API
    callAPI = city => {
        // Call API
        console.log("je suis dans API");
        axios
        .get('http://localhost:3001/users/location')
   
        .then(({ data }) => {
            console.log(data);
            // Recupere uniquement la propriété data
            const { list } = data;
            // On prend les trois premières heures de chaque jour (donc de 0-3h))
            const info = [list[0], list[1]];
    
            this.setState({ info });
          })
        
        .catch(error => console.log(error))

    };

    // Lance un appel au lancement du component
    componentDidMount() {
        const { info } = this.props;
        this.callAPI(info);
    }

    // A chaque update relance une api
    componentDidUpdate(nextProps) {
        // Ici on verifie que la mise à jour concerne bien le champs city
        if (nextProps.info !== this.props.info) {
        this.callAPI(nextProps.info);
        }
    }

    render() {
        return (
            <div className="dashboard">
                    <div id="app">
                        { this.state.info}
                    </div>
                <div className="row ">
                     <h1 className="pageName">DASHBOARD</h1> 
                </div>

                <div className="row widgetContainer">

                    <div className="col">
                        <Widget1 nom={this.state.widget1.nom}
                        type={this.state.widget1.type}
                        content={this.state.widget1.content} > 
                        </Widget1>
                    </div>
                    <div className="col">
                        <Widget2 nom={this.state.widget2.nom} data={this.state.widget2.data} >  
                        </Widget2>
                      
                    </div>
                    <div className="col">
                        <Widget3  nom={this.state.widget3.nom}
                        type={this.state.widget3.type}
                        content={this.state.widget3.content} >  
                        </Widget3>
                    </div>

                </div>
                <div className="row widgetContainer">
                    <div className="col">
                        <Widget4 nom={this.state.widget4.nom}
                        type={this.state.widget4.type}
                        content={this.state.widget4.content} >  
                        </Widget4>
                    </div>
                    <div className="col">
                        <Widget5 nom={this.state.widget5.nom}
                        type={this.state.widget5.type}
                        content={this.state.widget5.content} >  
                        </Widget5>
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
