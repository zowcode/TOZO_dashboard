import React from 'react';
import { Component } from "react";
import '../App.css';
import Widget1 from './Widget1';
import Widget2 from './Widget2';
import Widget3 from './Widget3';
import Widget4 from './Widget4';
import Widget5 from './Widget5';

/// Pour tapper dans API:
import axios from "axios";

// Load the full build.
var _ = require('lodash');

class Dashboard extends Component {

    // CONSTRUCTEUR
    constructor(props) {

        super(props);

        // STATE: données internes du composant
        this.state = {
            // WIDGET 1 : LISTE Liste des pays munis de sensors
            locations: ["paris", "moscou", "berlin"],

            // WIDGET 3 : CAMAMBERT Nb sensor / type de sensor
                sensorT: 10,  // nb sensors température
                sensorH: 6,// nb sensors humidité
                sensorP: 4, // nb sensors pollution
           

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

    // CALL API GET 
    callAPI = data => {

        //WIDGET 1
        axios
        .get('http://localhost:3001/users/location')
        /*.put('http://localhost:3001/users', {location : "bathroom", person...} 
        {
            headers: {"Content-Type": "text/plain"}}
        )*/
        .then(response => {
        
            console.log(response.data.user);
            var locationsList = response.data.user;
            console.log(locationsList);
            /*
            this.setState(prevState => ({
                locations: [...prevState.locations, locationsList]
              }))*/

              this.setState({
                locations: response.data.user
              });
            
        })
        .catch(error => console.log(error))

        //WIDGET 3 sensor de temp
        axios
        .get('http://localhost:3001/users/')
        .then(function (response) {
        
            console.log(response.data);
            var nb = response.data.length;
            console.log(nb);
              this.setState({
                sensorT: nb
              });
        })
        .catch(error => console.log(error))
        

    };

    // Lance un appel au lancement du component
    componentDidMount() {
        console.log("Calle API 1; locations:");
        console.log(this.state.locations);
      //  const { locations } = this.props;
        this.callAPI();
    }

    // A chaque update relance une api
    componentDidUpdate(nextProps) {
        // Ici on verifie que la mise à jour concerne bien le champs city
        if (nextProps.locations !== this.props.locations) {
        this.callAPI(nextProps.locations);
        }
    }

    render() {
       
        return (
            <div className="dashboard">
                <div className="row ">
                     <h1 className="pageName">DASHBOARD</h1> 
                </div>

                <div className="row widgetContainer">

                    <div className="col">
                        <Widget1 nom={this.state.widget1.nom}
                        type={this.state.widget1.type}
                        content={this.state.widget1.content} locations={this.state.locations}  > 
                        </Widget1>
                    </div>
                    <div className="col">
                        <Widget2 nom={this.state.widget2.nom} data={this.state.widget2.data} >  
                        </Widget2>
                      
                    </div>
                    <div className="col">
                        <Widget3  nom={this.state.widget3.nom}
                        type={this.state.widget3.type}
                        sensorT={this.state.sensorT}  sensorP={this.state.sensorP}   sensorH={this.state.sensorH}  >  
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
                    
                </div>

            </div>
        );
    }
}

export default Dashboard;
