import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = { pieColor: string; hoverd: boolean };

const PieChart = ({ pieColor, hoverd }: Props) => {
  const data = {
    datasets: [
      {
        label: "Poll",
        data: [30, 30, 70],
        backgroundColor: [
          "transparent",
          hoverd ? "#fff" : pieColor,
          "transparent",
        ],
        rotation: 140,
        borderRadius: 6,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    animations: {
      colors: { duration: 0 },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },

    cutout: "80%",
  };

  return (
    <div style={{ width: "112px", height: "112px", position: "relative" }}>
      <div
        style={{
          width: "112px",
          height: "112px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Doughnut data={data} options={options}></Doughnut>
      </div>
      <div>
        <Doughnut
          data={{
            datasets: [
              {
                label: "Poll",
                data: [30, 70],
                backgroundColor: [
                  "transparent",
                  hoverd ? "#B37EFC" : "#F4F5F9",
                ],
                rotation: 140,
                borderRadius: [0, 6],
                borderWidth: 0,
              },
            ],
          }}
          options={options}
        ></Doughnut>
      </div>
    </div>
  );
};

export default PieChart;
