import React from 'react';
import {scaleBand, scaleLinear, scaleOrdinal} from 'd3-scale';
import {tsvParse} from 'd3-dsv';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';
import { select } from "d3-selection";
import dataTsv from './dataTsv';

const svgWidth=480, svgHeight=250;

const color = scaleOrdinal().range([
  '#98abc5',
  '#8a89a6',
  '#7b6888',
  '#6b486b',
  '#a05d56',
  '#d0743c',
  '#ff8c00',
]);

const margin = {top:20, right:20, bottom:30, left:40},
  width = svgWidth-margin.left  - margin.right,
  height= svgHeight- margin.top - margin.bottom;

const x = scaleBand()
  .rangeRound([0,width])
  .padding(0,1),
  y= scaleLinear().rangeRound([height,0]);

const data = tsvParse(dataTsv, d=> {
  d.frequency =+d.frequency;
  return d;
});

x.domain(data.map(d => d.letter));
y.domain([0,max(data, d=> d.frequency)]);

//<Barchart/>
export default()=>(
  <div>
  <div>
    <p  y="6" dy="0.71em" textAnchor="end">
      Frequency
    </p>
  </div>
  <svg width={svgWidth} height={svgHeight}>
  <g transform = {`translate(${margin.left}, ${margin.top})`}>
    <g 
      className="axis axis--x"
      transform={`translate(0,${height})`}
      ref={node =>select(node).call(axisBottom(x))}
    />
    <g className="axis axis--y">

      <g ref={node => select(node).call(axisLeft(y).ticks(10,'%'))}/>
    
    </g>
    {data.map(d=>(
      <rect
        className= "bar"
        key={d.letter}
        x={x(d.letter)}
        y={y(d.frequency)}
        width={x.bandwidth()}
        height={height-y(d.frequency)}
        fill= {color(d.letter)}
      />
    ))}
    </g>
  </svg>
  </div>
);