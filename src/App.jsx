import { Chart } from "chart.js/auto";
import React from "react";
import "./App.css";
import BarChartJS from "./components/chartjs/bar.components";
import BarRechart from "./components/recharts/bar.components";

const App = () => {
  return (
    <div className="App">
      <div className="chartjs">
        <BarChartJS />
      </div>
      <div className="rechart">
        <BarRechart />
      </div>
    </div>
  );
};

export default App;
