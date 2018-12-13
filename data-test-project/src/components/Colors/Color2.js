import React from 'react';
import { scaleOrdinal } from 'd3-scale';


const color2 = scaleOrdinal().range([
  '#3B413C',
  '#9DB5B2',
  '#DAF0EE',
  '#94D1BE',
  '#FFCECE',
  '#94D1BE',
  '#DAF0EE',
  '#9DB5B2',
  '#3B413C'
]);

export default color2;