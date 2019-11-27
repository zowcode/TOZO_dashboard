import React from 'react';
import '../App.css';

function pageAPI() {
  return (
    <div class = "container">
      <div class="row pageAPI">
        <div id="" class="colonne offset-3 col-lg-6 col-md-3 col-sm-4 col-6">
        <div className="AddData">
        API PAGE
        <div className="header">
        <form>
          Type data:
            <input type="text" name="firstname"></input><br/>
           Data:
            <input type="text" name="lastname"></input> <br/>
            <button type="submit">Ajouter de la data</button>
          </form>
        </div>
      </div>
        
        </div>
      </div>
    </div>
      
  );
}
export default pageAPI;
