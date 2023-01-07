import React from "react";
import { Icons } from "../assets";
import { RecommendType } from "../types";

type Props = {
  recommendItem: RecommendType;
};

const RecommendCard = ({ recommendItem }: Props) => {
  const { name, price, image, ratio, inHour } = recommendItem;
  return (
    <div>
      <div>
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

export default RecommendCard;
