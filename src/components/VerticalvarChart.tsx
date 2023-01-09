import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      border: { display: false },
      grid: {
        tickColor: "transparent ",
      },
    },
    y: {
      display: false,
      border: {
        display: false,
      },
      grid: {
        color: "transparent ",
        tickColor: "transparent ",
      },
    },
  },
};

const labels = ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];

export const data = {
  labels,

  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#F4F5F9",
      barThickness: 28,
      hoverBackgroundColor: "#2884FF",
    },
  ],
};

const VerticalvarChart = () => {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalvarChart;
