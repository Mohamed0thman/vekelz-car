import React, { useState } from "react";
import { PieType } from "../types";
import PieChart from "./PieChart";
import { ReactComponent as FillThunderIcon } from "../assets/icons/FillThunderIcon.svg";

type Props = {
  pieItem: PieType;
  index: number;
};

const PieCard = ({ pieItem, index }: Props) => {
  const [hoverd, setHoverd] = useState<boolean>(false);
  const { title, Icon, ratio } = pieItem;

  const iconColors: string[] = [
    "#70CF9730",
    "#FF7E8630",
    "#A162F730",
    "#F6CC0D30",
  ];
  const pieColors: string[] = ["#70CF97", "#FF7E86", "#A162F7", "#F6CC0D"];
  return (
    <div
      className="pie-card d-flex flex-column justify-content-around align-items-center"
      onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{ textAlign: "center" }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: hoverd ? "rgba(255, 255, 255, 0.2)" : iconColors[index],
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <Icon fill={hoverd ? "#fff" : pieColors[index]} />
        </div>
        <h2 style={{ marginTop: "10px" }}>{title}</h2>
      </div>

      <div style={{ position: "relative" }}>
        <PieChart hoverd={hoverd} pieColor={pieColors[index]} />
        <h2
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {ratio}%
        </h2>
      </div>
    </div>
  );
};

export default PieCard;
