import React, { Component } from 'react';
import { arc as d3Arc, pie as d3Pie } from "d3-shape";
import { tsvParse } from "d3-dsv";

import dataTsv from './dataTsv';

import './PieChart.css';

const width= 480,
    height= 250,
    radius= Math.min(width,height)/2;

const arc= d3Arc()
    .outerRadius(radius-25)
    .innerRadius(radius-80);
const textarc= d3Arc()
    .innerRadius(radius-11)
    .outerRadius(radius-10);

const pie= d3Pie()
    .sort(null)
    .value(function (d) {
        return d.frequency;
    });

const data= pie(
    tsvParse(dataTsv, d=> {
        d.frequency=+d.frequency;
        return d;
    })
);

//<DonutChart/>
class PieChart extends Component {

  render() {
    return (
        <div>
        <svg width={width} height={height}>
            <g transform={`translate(${width/2}, ${height/2})`}>
                {data.map(d => (
                    <g key={`a${d.data.letter}`}>
                    <path className="arc" d={arc(d)} fill={this.props.color(d.data.letter)}/>
                    <text className='PieText'
                        transform=
                        {`translate(${textarc.centroid(d)})`}
                        dy =".25em">
                        {d.data.letter}                   
                    </text>
                    </g>
                ))}
                </g>
            </svg>
            </div>
    );
};}

export default PieChart;