import React from "react";
import { Bar } from "react-chartjs-2"; // Note the type of chart seems to need curly brackets

const BarChartJS = () => {
  return (
    <Bar
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

export default BarChartJS;
