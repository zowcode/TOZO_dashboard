import React from 'react';
import { Component } from "react";
import '../App.css';
import Axios from 'axios';

/// Pour tapper dans API:
import axios from "axios";

class pageAPI extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      userList: ["paris", "moscou", "berlin"] ,
      homeSize: "",
      location: "",
      personsInHouse: "",
      nbUser: 0
    };
  }
   // CALL API GET 
 callAPI = data => {

    //get userListe
    axios
    .get('http://localhost:3001/users')
    .then(response => {
      var userList = response.data.users;
      console.log("call API admin:");
      console.log(response.data.users);
      console.log(userList);
      this.setState({
        userList: response.data.users
      });

    }) 
    .catch(error => console.log(error))


   axios
   .get('http://localhost:3001/users/all' )
    .then(response => {
      var nombre = response.data.users.length;
      console.log(response.data.users.length);
      console.log("nb users");
      console.log(nombre);
      this.setState({
        nbUser: nombre
      });
    }) 
   .catch(error => console.log(error))
      
  };
  // Lance un appel au lancement du component
  componentDidMount() {
          
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

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("Vous avez bien ajouté les user localisé à " + this.state.location);
    //this.callAPI();
    axios
    .put('http://localhost:3001/users', {
      location : this.state.location,
      personsInHouse: this.state.personsInHouse,
      homeSize: this.state.homeSize,
     } )
    .catch(error => console.log(error))
  }
  myChangeHandler1 = (event) => {
    this.setState({location: event.target.value});
  }
  myChangeHandler2 = (event) => {
    this.setState({personsInHouse: event.target.value});
  }
  myChangeHandler3 = (event) => {
    this.setState({homeSize: event.target.value});
  }
  render() {

  return (
    <div className = "container">
      <div className="row pageAPI">
        <div id="" className="colonne offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
        <div className="AddData">
        <h1>ADMINISTRATION UTILISATEUR</h1>

          <div className="header">
              
            <form onSubmit={this.mySubmitHandler}>
                Location<br/>
                <input type="text" name="location" onChange={this.myChangeHandler1} ></input><br/><br/>
                Persons living in the house <br/>
                <input type="text" name="personsInHouse " onChange={this.myChangeHandler2}></input> <br/> <br/>
                House size<br/>
                <input type="text" name="homeSize" onChange={this.myChangeHandler3}></input> <br/><br/>
              
                <button type="submit"> Ajouter </button><br/><br/>
            </form>
          </div> 
      
        </div>
        
        </div>
      </div>

        <div className="row pageAPI">
        <div id="" className="colonne offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
          <div className="AddData">
        <h1> LISTE UTILISATEURS: </h1><br/>
        <h5> nombre: {this.state.nbUser} </h5><br/>
        <ul>
          {this.state.userList.map(item => (
              <div  className="header" key={item}>{item}</div>
          ))}
        </ul>
        </div>
        </div>
      </div>

    </div>
      
  );
 }
}
export default pageAPI;
