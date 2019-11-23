import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import photoProfil from '../Images/pp.jpg';



function ProfilBar() {
  return (
    <div className="ProfilBar">
      <div className="container">

    
        <Image className="photoProfilUser" src={photoProfil} roundedCircle height="70%" width="70%"/> 

      
 
         <Button className="bouttonProfilUtilisateur " variant="danger"  >Profil</Button> <br/>

    
        <Button className="bouttonModifierWidget " variant="secondary">Widgets</Button><br/>
      


    </div>
    </div>
  );
}

export default ProfilBar;
