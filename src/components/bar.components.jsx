import React from "react";
import { Bar } from "react-chartjs-2"; // Note the type of chart seems to need curly brackets

const BarChart = () => {
  return (
    <Bar
      options={{
        // Note the options are there, just gotta look at docs
        indexAxis: "y",
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          title: {
            display: true,
            text: "Chart.js Horizontal Bar Chart",
          },
        },
      }}
      data={{
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "Revenue",
            data: [200, 300, 400],
          },
          {
            label: "Loss",
            data: [90, 80, 70],
          },
        ],
      }}
    />
  );
};

export default BarChart;
