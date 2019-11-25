import React from 'react';
import { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


class Widget2 extends Component {
    // CONSTRUCTEUR
   constructor(props) {

   super(props);}
    // STATE: données internes du composant
   
   render() {
       this.type=this.props.type;
       var data = [9, 56, 46];
       
       return (
           <div className="Widget2">
               <div className="widgetName"> {this.props.nom} </div>
                
               <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                </LineChart>
                            
           
           </div>
       );
   }
 
}
export default Widget2;
