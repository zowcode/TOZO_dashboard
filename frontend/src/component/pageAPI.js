import React from 'react';
import { Component } from "react";
import '../App.css';
import Axios from 'axios';

/// Pour tapper dans API:
import axios from "axios";

class pageAPI extends Component {

  constructor(props) {
    super(props);
    this.state = { userList: ["paris", "moscou", "berlin"] };
  }
   // CALL API GET 
 callAPI = data => {

    //get userListe
    axios
    .get('http://localhost:3001/users')
    .then(response => {
      var userList = response.data._id;
      console.log("call API admin:");
      console.log(response.data);
      console.log(userList);
      this.setState({
        userList: response.data._id
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

    alert("You are submitting " + this.state.username);
  }


  render() {

  return (
    <div className = "container">
      <div className="row pageAPI">
        <div id="" className="colonne offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
        <div className="AddData">
           ADMINISTRATION

          <div className="header">
            <form onSubmit={this.mySubmitHandler}>
                Location<br/>
                <input type="text" name="location"></input><br/><br/>
                Persons living in the house <br/>
                <input type="text" name="personsInHouse"></input> <br/> <br/>
                House size<br/>
                <input type="text" name="homeSize"></input> <br/><br/>
              
                <button type="submit"> Ajouter </button>
            </form>
          </div> 

          LISTE UTILISATEURS: 

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
