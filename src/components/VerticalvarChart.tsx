import React, { useState } from "react";
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
import { DateButtons } from ".";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  hovered: boolean;
};
const VerticalvarChart = ({ hovered }: Props) => {
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

  const data = {
    labels,

    datasets: [
      {
        data: chartData,
        backgroundColor: "#F4F5F9",
        barThickness: 28,
        hoverBackgroundColor: "#2884FF",
      },
    ],
  };

  return (
    <div>
      <DateButtons
        handleOnDay={handleOnDay}
        handleOnMonth={handleOnDay}
        handleOnYear={handleOnDay}
        text="256 Miles"
      />
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalvarChart;
