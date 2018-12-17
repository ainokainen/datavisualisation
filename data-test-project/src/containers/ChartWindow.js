import React, { Component } from 'react';
import { SketchPicker } from "react-color";
import { scaleOrdinal } from 'd3-scale';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import Button from '../components/Button/Button';
import Color2 from '../components/Colors/Color2';
import Color1 from '../components/Colors/Color1';
import Color3 from '../components/Colors/Color3';
import TestColor from '../components/Colors/TestColor';

class ChartWindow extends Component {
    constructor(props){
        super(props)
        this.state= {
        showchart:'Chart1',
        showColors: Color1,
        color: '#7a1d8d',
/*         hex: '',
        lum: 0, */
        colorRgb: 0,
        };
    }

    changeChart = (chart) => {
        if (chart === 'BarChart') {
            this.setState({
                showchart:'Chart1'
            });
        } else if (chart === 'PieChart'){
            this.setState({
                showchart:'Chart2'
            });
        } else {
            this.setState({
                showchart:''
            });
        }
    }
    changeColors = (color) => {
        if (color === 'Theme1') {
            this.setState({
                showColors: Color1
            });
        } else if (color === 'Theme2'){
            this.setState({
                showColors: Color2
            });
        } else if (color === 'Theme3'){
            this.setState({
                showColors: scaleOrdinal().range([
                    this.state.color
                ])                 
            });
/*         } else if (color === 'Test'){
        console.log(this.state.hex);
            this.setState({
                showColors: TestColor
                    hex={this.state.hex} lum={this.state.lum}
                       color= {this.state.color} 
                                
            }); */
        } else if (color === 'Theme4'){
            this.setState({
                showColors: Color3
            });}
    }  
    handleChangeComplete = (color) => {
        console.log(color.hex);
        console.log(color.rgb);
        this.setState(
            {color: color.hex},
            {colorRgb: color.rgb},
        );
    }
    render() {
        return (
            <div>
            {this.state.showchart === 'Chart1'&&<BarChart 
                color={this.state.showColors} 
                />}
                {console.log(this.state.rgb)}
            {this.state.showchart === 'Chart2'&&<PieChart 
                color={this.state.showColors}
                />}
            <Button clicked= {()=> this.changeChart('BarChart')}>Show Barchart</Button>
            <Button clicked= {()=> this.changeChart('PieChart')}>Show Piechart</Button>
            <Button clicked= {()=> this.changeColors('Theme1')}>Colors 1</Button>
            <Button clicked= {()=> this.changeColors('Theme2')}>Colors 2</Button>  
            <Button clicked= {()=> this.changeColors('Theme3')}>Colors 3</Button>  
            <Button clicked= {()=> this.changeColors('Theme4')}>Colors 4</Button>  
            <Button clicked= {()=> this.changeColors('Test')}>Test</Button>  
            <SketchPicker
                color = { this.state.color }
                onChange= { this.handleChangeComplete }
            />
            </div>
        );
    }
}

export default ChartWindow; 