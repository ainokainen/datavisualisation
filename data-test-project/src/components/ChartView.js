import React, { Component } from "react";
import { GetCharts } from "../ServiceClient";
import "./Dropdown.css";

class ChartView extends Component {
  constructor(props) {
    super(props);
    this.state = { charts: [] };
  }

  componentDidMount = () => {
    GetCharts(response => {
      var charts = response;

      console.log(response);
      this.setState({ charts: charts });
    });
  };
  render() {
    var allCharts = this.state.charts.map((chart, i) => (
      <div class="dropContent">
        <li>
          <a href="#" key={i}>
            {chart.headline}
          </a>
        </li>
      </div>
    ));
    return (
      <div>
        <div class="dropMenu">
          <button class="dropButton">Select Chart</button>
          <ul>{allCharts}</ul>
        </div>
      </div>
    );
  }
}

export default ChartView;
