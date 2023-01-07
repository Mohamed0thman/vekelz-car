import React from "react";
import { PieType } from "../types";
import PieChart from "./PieChart";

type Props = {
  pieItem: PieType;
};

const PieCard = ({ pieItem }: Props) => {
  const { title, icon, ratio } = pieItem;
  return (
    <div>
      <div>
        <img src={icon} alt="" />
      </div>
      <h4>{title}</h4>
      <PieChart />
      <h4>{ratio}%</h4>
    </div>
  );
};

export default PieCard;
