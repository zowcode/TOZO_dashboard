import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import '../App.css';

const data = [
  { name: 'Température', value: 500 },
  { name: 'Humidité', value: 300 },
  { name: 'Pollution', value: 300 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g >
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector 
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path  d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle  cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Nombre: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`( ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/hqnrgxpj/';

   // CONSTRUCTEUR
   constructor(props) {

    super(props);
    
   this.state = {
    activeIndex: 0,
     data : [
      { name: 'Température', value: this.props.sensorT },
      { name: 'Humidité', value: this.props.sensorH },
      { name: 'Pollution', value: this.props.sensorP },
    ]
  };
} 

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    
    return (
        <div className="widget">   
            <div className="widgetName"> Nombre de Capteurs </div>
            <PieChart  width={400} height={215}>
                <Pie 
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={this.state.data}
                cx={200}
                cy={90}
                innerRadius={45}
                outerRadius={55}
                fill="#05f26c"
                dataKey="value"
                onMouseEnter={this.onPieEnter}
                />
                
            </PieChart>
        </div>
    );
  }
}
export default Example;
