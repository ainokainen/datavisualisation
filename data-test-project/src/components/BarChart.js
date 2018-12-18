import React, {Component} from 'react';
import {scaleBand, scaleLinear } from 'd3-scale';
import {tsvParse} from 'd3-dsv';
import {max} from 'd3-array';
import {axisBottom, axisLeft} from 'd3-axis';
import { select } from "d3-selection";
import dataTsv from './dataTsv';

const svgWidth=480, svgHeight=250;

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

class BarChart extends Component {

  render() {
    return (
    <div>
      <p  y="6" dy="0.71em" textAnchor="end">
        Frequency
      </p>
      <svg  xlmns='http://www.w3.org/2000/svg' viewBox='0 0 500 270'
            preserveAspectRatio='xMidYMin slice'
            width='100%' height='100%' overflow='none'>
        <g transform = {`translate(${margin.left}, ${margin.top})`}>
        <g className="axis axis--x"
            transform={`translate(0,${height})`}
            ref={node =>select(node).call(axisBottom(x))}
        />
      <g className="axis axis--y">
        <g ref={node => select(node).call(axisLeft(y).ticks(10,'%'))}/>
      </g>
        {data.map((d) =>(
          <rect
          key={d.letter}
          x={x(d.letter)}
          y={y(d.frequency)}
          width={x.bandwidth()}
          height={height-y(d.frequency)}
          fill= {this.props.color(d.letter)}
        />
      ))}
      </g>
      </svg>
      <p  y="6" dy="0.71em" textAnchor="end">
        Letter
      </p>
    </div>
    );
  }
}

export default BarChart;
