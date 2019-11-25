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

      
 
         <button className=" "   >Profil</button> <br/>
         <img src="profil.svg" className="bouttonProfilUtilisateur"></img>

    
        <Button className="bouttonModifierWidget " variant="secondary">Widgets</Button><br/>
      


    </div>
    </div>
  );
}

export default ProfilBar;
