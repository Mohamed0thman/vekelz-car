import React from "react";
import { PieType } from "../types";
import PieChart from "./PieChart";

type Props = {
  pieItem: PieType;
  index: number;
};

const PieCard = ({ pieItem, index }: Props) => {
  const { title, icon, ratio } = pieItem;

  const iconColors: string[] = [
    "#70CF9730",
    "#FF7E8630",
    "#A162F730",
    "#F6CC0D30",
  ];
  const pieColors: string[] = ["#70CF97", "#FF7E86", "#A162F7", "#F6CC0D"];
  return (
    <div
      style={styles.pieCard}
      className="d-flex flex-column justify-content-around align-items-center"
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
            background: iconColors[index],
          }}
          className="d-flex justify-content-center align-items-center"
        >
          <img style={{ color: pieColors[index] }} src={icon} alt="" />
        </div>
        <h4>{title}</h4>
      </div>

      <div style={{ position: "relative" }}>
        <PieChart pieColor={pieColors[index]} />
        <h4
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {ratio}%
        </h4>
      </div>
    </div>
  );
};

const styles = {
  pieCard: {
    width: "232px",
    height: "266px",
    backgroundColor: "white",
    borderRadius: 14,
  },
};

export default PieCard;
