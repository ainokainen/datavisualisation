import React, { Component } from 'react';
import {GetCharts} from '../ServiceClient';

class ChartView extends Component {
    constructor(props) {
        super(props);
        this.state = {charts: []};
    }

    componentDidMount = () => {
        GetCharts(response => {
            var charts = response;

            console.log(response)
            this.setState({charts: charts})
        })
    }
    render() {

        var allCharts = this.state.charts.map((chart, i) => (
            <h5 key={i}>{chart.headline}</h5>
        ))
        return (
            <div>
                {allCharts}
            </div>
        );
    }
}

export default ChartView;