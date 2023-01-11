import React from "react";
import { Card } from "react-bootstrap";
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
    <Card
      className="recommend-cart"
      style={{ ...styles.recommendCard, background: bacgroundColors[index] }}
    >
      <div
        style={{ marginBottom: "12px" }}
        className="d-flex align-items-center"
      >
        <Icons.RecycleIcon />
        <h5 style={{ margin: 0, marginLeft: "10px" }}>{ratio}% Recommend </h5>
      </div>
      <div
        style={{ marginBottom: "10px", maxWidth: "257px", maxHeight: "106px" }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={image}
          alt={name}
        />
      </div>

      <h3>{name}</h3>
      <div
        style={styles.cardFooter}
        className="d-flex d-flex justify-content-between align-items-center"
      >
        <div className="d-flex justify-content-center align-items-center">
          <Icons.RepeatIcon style={{ marginRight: "16px" }} />
          <span style={{ marginRight: "16px" }}>{price}k</span>
          <Icons.TargetIcon style={{ marginRight: "16px" }} />
          <Icons.ThunderIcon
            style={{ strokeWidth: "2px" }}
            stroke="#72767C"
            fill="none"
            width={13}
            height={13}
          />
        </div>
        <div>${inHour}/h</div>
      </div>
    </Card>
  );
};

const styles = {
  recommendCard: {
    maxWidth: "310px",
    height: "236px",
    padding: "15px 27px",
    borderRadius: "14px",
    border: "none",
  },
  cardHeader: {},

  cardFooter: { fontSize: "1.4rem", color: "#72767C" },
};

export default RecommendCard;
