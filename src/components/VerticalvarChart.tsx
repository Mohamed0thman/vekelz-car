import React, { useContext, useState } from "react";
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
import { AppContext } from "../context/AppContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  primaryColor?: string;
};
const VerticalvarChart = ({ primaryColor = "blue" }: Props) => {
  const { darkTheme } = useContext(AppContext);
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
        backgroundColor: darkTheme ? "#1F2128" : "#F4F5F9",
        barThickness: 28,
        hoverBackgroundColor: "#2884FF",
      },
    ],
  };

  return (
    <div>
      <DateButtons
        handleOnDay={handleOnDay}
        text="256 Miles"
        primaryColor="#2884FF"
      />
      <Bar options={options} data={data} />
    </div>
  );
};

export default VerticalvarChart;
