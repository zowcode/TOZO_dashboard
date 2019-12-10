import React from 'react';
import '../App.css';
import Axios from 'axios';

class pageAPI extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);

    axios
    .put('http://localhost:3001/users', {location: location, personsInHouse: personsInHouse, homeSize: homeSize});

  }

  render(){

  return (
    <div class = "container">
      <div class="row pageAPI">
        <div id="" class="colonne offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
        <div className="AddData">
           ADMINISTRATION
        <div className="header">
        <form onSubmit={this.mySubmitHandler}>
            Location<br/>
            <input type="text" name="location"></input><br/><br/>
            Persons living in the house <br/>
            <input type="number" name="personsInHouse"></input> <br/> <br/>
           House size<br/>
            <input type="text" name="homeSize"></input> <br/><br/>
          
            <button type="submit">Ajouter un user</button>
          </form>
         </div> 
         </div>
        
        </div>
      </div>
    </div>
      
  );
 }
}
export default pageAPI;
