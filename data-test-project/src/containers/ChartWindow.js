import React, { Component } from 'react';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import Button from '../components/Button/Button'

class ChartWindow extends Component {
    constructor(props){
        super(props)
        this.state= {
        showchart:'Chart1'
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
    render() {
        return (
            <div>
            {this.state.showchart === 'Chart1'&&<BarChart/>}
            {this.state.showchart === 'Chart2'&&<PieChart/>}
            <Button clicked= {()=> this.changeChart('BarChart')}>Show Barchart</Button>
            <Button clicked= {()=> this.changeChart('PieChart')}>Show Piechart</Button>
             </div>
        );
    }
}

export default ChartWindow; 