import { Component } from "react";
import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2010', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2011', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '2012', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '2013', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '2014', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '2015', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '2016', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

  render() {
    return (
        <div className="widget">   
            <div className="widgetName"> {this.props.nom} </div>
            <BarChart
                width={400}
                height={200}
                data={data}
                margin={{
                top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                <Bar dataKey="uv" fill="#ffc658" />
            </BarChart>
        </div>
    );
  }
}
