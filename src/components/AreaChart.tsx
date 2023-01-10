import React, { useState } from "react";

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
import { DateButtons } from ".";

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

type Props = {
  primaryColor?: string;
};

const AreaChart = ({ primaryColor = "blue" }: Props) => {
  const [chartData, setChartData] = useState<number[]>(getRandomData());

  function handleOnDay() {
    setChartData(getRandomData());
  }

  function getRandomData(): number[] {
    return [1, 2, 3, 4, 5, 6, 7].map(() =>
      faker.datatype.number({ min: 0, max: 1000 })
    );
  }

  const options = {
    responsive: true,
    animations: {
      colors: { duration: 0 },
    },
    elements: {
      point: {
        radius: 0,
      },
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

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: chartData,
        borderColor: primaryColor,
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

  return (
    <div>
      <DateButtons
        handleOnDay={handleOnDay}
        text="20 February 2022"
        styleConataner={{ flexDirection: "row-reverse" }}
        primaryColor={primaryColor}
      />
      <Line options={options} data={data} />
    </div>
  );
};

export default AreaChart;
