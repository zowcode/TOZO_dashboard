import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'France', Température: 4000, Humidité: 2400, amt: 2400,
  },

  {
    name: 'Espagne', Température: 2000, Humidité: 9800, amt: 2290,
  },
  {
    name: 'Ouagadoudou', Température: 1890, Humidité: 4800, amt: 2181,
  },
 
  {
    name: 'China', Température: 3490, Humidité: 4300, amt: 2100,
  },

  {
    name: 'Ethiopia', Température: 3490, Humidité: 4300, amt: 2100,
  },
  {
    name: 'Germany', Température: 3490, Humidité: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
    <div className="widget">   
      <div className="widgetName"> {this.props.nom} </div>
      <div type="text" value={this.props.data} onChange={this.handleChange}/>
      
      <BarChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Température" fill="#8884d8" />
        <Bar dataKey="Humidité" fill="#82ca9d" />
      </BarChart>
    </div>
    );
  }
}
