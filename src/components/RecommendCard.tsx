import React from "react";
import { Icons } from "../assets";
import { RecommendType } from "../types";

type Props = {
  recommendItem: RecommendType;
  index: number;
};

const RecommendCard = ({ recommendItem, index }: Props) => {
  const { name, price, image, ratio, inHour } = recommendItem;

  const bacgroundColors: string[] = ["#E1DFA4", "#E3ECF1", "#F4E3E5"];
  return (
    <div
      style={{ ...styles.recommendCard, background: bacgroundColors[index] }}
    >
      <div className="d-flex  align-items-center">
        <img src={Icons.recycleIcon} alt="recycle" />
        <span>{ratio}% Recommend </span>
      </div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <div className="d-flex d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img src={Icons.repeatIcon} alt="repeatIcon" />
          <span>{price}k</span>
          <img src={Icons.targetIcon} alt="targetIcon" />
          <img src={Icons.thunderIcon} alt="thunderIcon" />
        </div>
        <div>${inHour}/h</div>
      </div>
    </div>
  );
};

const styles = {
  recommendCard: {
    maxWidth: "310px",
    padding: "15px 27px",
    borderRadius: "14px",
  },
};

export default RecommendCard;
