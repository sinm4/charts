import { Chart } from "chart.js/auto";
import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./App.css";
import BarChart from "./components/bar.components";

const App = () => {
  return (
    <div className="App">
      <div className="revenue">
        <BarChart />
      </div>
    </div>
  );
};

export default App;
