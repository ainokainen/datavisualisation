import React from 'react';
import { scaleOrdinal } from 'd3-scale';
import Color1 from './Color1';

const colors = scaleOrdinal().range([
    '#98abc5',
    '#8a89a6',
    '#7b6888',
    '#6b486b',
    '#a05d56',
    '#d0743c',
    '#ff8c00',
 ]); 

export default colors; 
