import React, { Component } from 'react';
import { SketchPicker } from "react-color";
import { scaleOrdinal } from 'd3-scale';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import Button from '../components/Button/Button';
import Color2 from '../components/Colors/Color2';
import Color1 from '../components/Colors/Color1';
import Color3 from '../components/Colors/Color3';
//import TestColor from '../components/Colors/TestColor';

class ChartWindow extends Component {
    constructor(props){
        super(props)
        this.state= {
        showchart:'Chart1',
        showColors: Color1,
        color: '#7a1d8d',
        hex: '',
        lum: 0, 
        rgb: 0,
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
        } else if (color === 'Theme5'){

            function colorLuminance  (hex , lum) {
            hex= String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex= hex[0]+ hex[0]+ hex[1]+ hex[1]+ hex[2]+ hex[2];
                } 
                lum = lum || 0;

                let rgb= '#', c, i;
                    for (i=0; i<3; i++) {
                        c= parseInt(hex.substr(i*2,2), 16);
                        c = Math.round(Math.min(Math.max(0, c+(c*lum)), 255)).toString(16);
                        rgb += ('00'+ c).substr(c.length);
                console.log(rgb, 'luminance loopissa') ;
                    }
                console.log(rgb, 'luminance chartwindow') ;
            return rgb;
            }
            this.setState({
                showColors: scaleOrdinal().range([
                colorLuminance(this.state.color, 0),
                colorLuminance(this.state.color, 0.6),
                colorLuminance(this.state.color, 0.1),
                colorLuminance(this.state.color, 0.3),
                colorLuminance(this.state.color, 0),
                colorLuminance(this.state.color, 0.9),
                ])                 
            });
         } else if (color === 'Theme6'){
            function getRandomColor() {
                let letters = '0123456789ABCDEF'.split('');
                let randomColor= '#';
                for (let i = 0; i<6; i++){
                    randomColor += letters[Math.round(Math.random() * 15)];
                }
                return randomColor;
            }

            function colorLuminance  (hex , lum) {
            hex= String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex= hex[0]+ hex[0]+ hex[1]+ hex[1]+ hex[2]+ hex[2];
                } 
                lum = lum || 0;

                let rgb= '#', c, i;
                    for (i=0; i<3; i++) {
                        c= parseInt(hex.substr(i*2,2), 16);
                        c = Math.round(Math.min(Math.max(0, c+(c*lum)), 255)).toString(16);
                        rgb += ('00'+ c).substr(c.length);
                    }
                console.log(rgb, 'luminance chartwindow') ;
            return rgb;
            }
            this.setState({
                showColors: scaleOrdinal().range([
                colorLuminance(this.state.color, 0),
                colorLuminance(this.state.color, 0.6),
                getRandomColor(),
                colorLuminance(this.state.color, 0.1),
                getRandomColor(),
                colorLuminance(this.state.color, 0.3),
                getRandomColor(),
                colorLuminance(this.state.color, 0),
                colorLuminance(this.state.color, 0.9),
                ])                 
            }); 
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
        );
    }

    render() {
        return (
            <div>
            {this.state.showchart === 'Chart1'&&<BarChart color={this.state.showColors}  />}
            {this.state.showchart === 'Chart2'&&<PieChart color={this.state.showColors} />}
            <Button clicked= {()=> this.changeChart('BarChart')}>Show Barchart</Button>
            <Button clicked= {()=> this.changeChart('PieChart')}>Show Piechart</Button>
            <Button clicked= {()=> this.changeColors('Theme1')}>Colors 1</Button>
            <Button clicked= {()=> this.changeColors('Theme2')}>Colors 2</Button>  
            <Button clicked= {()=> this.changeColors('Theme3')}>Colors 3</Button>  
            <Button clicked= {()=> this.changeColors('Theme4')}>Colors 4</Button>  
            <Button clicked= {()=> this.changeColors('Theme5')}>Monochromatic</Button>  
            <Button clicked= {()=> this.changeColors('Theme6')}>Spice it with random</Button>  
            <SketchPicker
                hex= {this.state.color.hex}
                color = { this.state.color }
                colorRgb = { this.state.colorRgb }
                onChange= { this.handleChangeComplete }
            />
            </div>
        );
    }
}

export default ChartWindow; 