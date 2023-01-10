import React, { useState } from "react";
import { AreaChart, VerticalvarChart } from ".";

type Props = {
  title: string;
  isAreaChart?: boolean;
};

const ChartContainer = ({ isAreaChart, title }: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      style={styles.milesChart}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h4 style={{ fontWeight: "bold" }}>{title}</h4>

      {isAreaChart ? (
        <AreaChart hovered={hovered} />
      ) : (
        <VerticalvarChart hovered={hovered} />
      )}
    </div>
  );
};
const styles = {
  milesChart: {
    background: "white",
    borderRadius: "14px",
    maxWidth: "488px",
    height: "332px",
    padding: "15px",
  },

  dateList: {
    width: "43px",
    height: "20px",
    background: "#2884FF",
    borderRadius: "24px",
    textAlign: "center" as const,
    lineHeight: "20px",
    marginRight: "10px",
    color: "white",
    fontSize: "10px",
    fontWeight: "bold",
  },
};
export default ChartContainer;

// <div className="d-flex align-items-center justify-content-between">
// <ul className="d-flex align-items-center ">
//   <li style={styles.dateList}>Day</li>
//   <li style={styles.dateList}>Week</li>
//   <li style={styles.dateList}>Month</li>
// </ul>
// <span>256 Miles</span>
// </div>
