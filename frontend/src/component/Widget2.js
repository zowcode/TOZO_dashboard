import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Matin', uv: 4000, pv: 2400, amt: 2400,
  },

  {
    name: 'Soir', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
 
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },

  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
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
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
    );
  }
}
