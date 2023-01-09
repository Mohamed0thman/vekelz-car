import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      border: { display: false },
      grid: {
        color: "#F9F9F9 ",
        tickColor: "transparent ",
      },
    },
    y: {
      display: false,
      grid: {
        color: "transparent ",
        tickColor: "transparent ",
      },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
};

const labels = ["7 am", "9 am", "1 pm", "3pm", "5 pm", "7 pm", "9pm"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#FF764C",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(255, 118, 76, 0.24)");
        gradient.addColorStop(1, "rgba(250,174,50,0)");
        return gradient;
      },
      borderWidth: 1,
      tension: 0.3,
    },
  ],
};

const AreaChart = () => {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default AreaChart;
