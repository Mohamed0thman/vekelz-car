import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = { pieColor: string };

const PieChart = ({ pieColor }: Props) => {
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
        <Doughnut
          data={{
            datasets: [
              {
                label: "Poll",
                data: [30, 30, 70],
                backgroundColor: ["transparent", pieColor, "transparent"],
                borderColor: ["transparent "],
                rotation: 140,
                borderRadius: 6,
              },
            ],
          }}
          options={{
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },

            cutout: "80%",
          }}
        ></Doughnut>
      </div>
      <div>
        <Doughnut
          data={{
            datasets: [
              {
                label: "Poll",
                data: [30, 70],
                backgroundColor: ["transparent", "#F4F5F9"],
                borderColor: ["transparent "],
                rotation: 140,
                borderRadius: [0, 6],
              },
            ],
          }}
          options={{
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
            },

            cutout: "80%",
          }}
        ></Doughnut>
      </div>
    </div>
  );
};

export default PieChart;
