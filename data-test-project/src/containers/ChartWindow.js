import React, { Component } from 'react';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import Button from '../components/Button/Button';
import Color2 from '../components/Colors/Color2';
import Color1 from '../components/Colors/Color1';


class ChartWindow extends Component {
    constructor(props){
        super(props)
        this.state= {
        showchart:'Chart1',
        showColors: Color1
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
        }
    }  
    render() {
        return (
            <div>
            {this.state.showchart === 'Chart1'&&<BarChart color={this.state.showColors}/>}
            {this.state.showchart === 'Chart2'&&<PieChart color={this.state.showColors}/>}
            <Button clicked= {()=> this.changeChart('BarChart')}>Show Barchart</Button>
            <Button clicked= {()=> this.changeChart('PieChart')}>Show Piechart</Button>
            <Button clicked= {()=> this.changeColors('Theme1')}>Colors 1</Button>
            <Button clicked= {()=> this.changeColors('Theme2')}>Colors 2</Button>  
             </div>
        );
    }
}

export default ChartWindow; 