import React from 'react';
import '../App.css';
import './ProfilBar.css';
import Page2 from './Page2';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import photoProfil from '../Images/pp.jpg';
import Figure from 'react-bootstrap/Figure';
import {Route, Switch, Link} from 'react-router-dom';
import Routes from './routes';



function ProfilBar(props) {
  
  return (
    <div className="ProfilBar">
      <div className="fluid-container">
   

        <div className="row row1">    
            <Image className="photoProfilUser" src={photoProfil} roundedCircle height="70%" width="70%"/> 
        </div>   

        <div className="row row2">
          <Link to={`/dashboard`}>
            <Button className="bouttonDashboard" variant="primary" >
             <img src={ require('../Images/dashboard.svg')} width="60%"></img>
            </Button>
          </Link>
            
        </div>

        <div className="row row3">
        <Link to={`/pageAPI`}>
            <Button className="bouttonPlus"   variant="primary">
              <img src={ require('../Images/plus.svg')} width="60%"></img>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfilBar;
