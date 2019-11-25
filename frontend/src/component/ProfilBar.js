import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import photoProfil from '../Images/pp.jpg';
import Figure from 'react-bootstrap/Figure';



function ProfilBar() {
  return (
    <div className="ProfilBar">
      <div className="container">

    
        <Image className="photoProfilUser" src={photoProfil} roundedCircle height="125%" width="125%"/> 

      
      <div className="row">
         <div className="containerBouttonDashboard">
           <img src={ require('../Images/dashboard.svg')} className="bouttonDashboard"></img>
         </div>
     </div>
        <Button className="bouttonModifierWidget " variant="secondary">Widgets</Button><br/>
      


    </div>
    </div>
  );
}

export default ProfilBar;
