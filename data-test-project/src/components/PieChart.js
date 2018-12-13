import React from 'react';
import { scaleOrdinal } from "d3-scale";
import { arc as d3Arc, pie as d3Pie } from "d3-shape";
import { tsvParse } from "d3-dsv";

import dataTsv from './dataTsv';

var width= 480,
    height= 250,
    radius= Math.min(width,height)/2;

const color = scaleOrdinal().range([
  '#98abc5',
  '#8a89a6',
  '#7b6888',
  '#6b486b',
  '#a05d56',
  '#d0743c',
  '#ff8c00',
]); 

var arc= d3Arc()
    .outerRadius(radius-25)
    .innerRadius(radius-80);
var textarc= d3Arc()
    .innerRadius(radius-22)
    .outerRadius(radius-0);

var pie= d3Pie()
    .sort(null)
    .value(function (d) {
        return d.frequency;
    });


var data= pie(
    tsvParse(dataTsv, d=> {
        d.frequency=+d.frequency;
        return d;
    })
);

//<DonutChart/>
export default () => {
    return(
        <div className="d3-wrapper">
        <svg width={width} height={height}>
            <g transform={`translate(${width/2}, ${height/2})`}>
                {data.map(d => (
                    <g key={`a${d.data.letter}`}>
                    <path className="arc" d={arc(d)} fill={color(d.data.letter)}/>
                    <text
                        transform=
                        {`translate(${textarc.centroid(d)})`}
                        dy =".35em">
                        {d.data.letter}                   
                    </text>
                    </g>
                ))}
                </g>
            </svg>
            </div>
    );
};