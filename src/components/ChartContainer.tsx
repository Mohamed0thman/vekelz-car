import React from "react";

type Props = {
  Chart: JSX.Element;
};

const ChartContainer = ({ Chart }: Props) => {
  return (
    <div style={styles.milesChart}>
      <h4 style={{ fontWeight: "bold" }}>Miles Statistics</h4>
      <div className="d-flex align-items-center justify-content-between">
        <ul className="d-flex align-items-center ">
          <li style={styles.dateList}>Day</li>
          <li style={styles.dateList}>Week</li>
          <li style={styles.dateList}>Month</li>
        </ul>
        <span>256 Miles</span>
      </div>
      {Chart}
    </div>
  );
};
const styles = {
  milesChart: {
    background: "white",
    borderRadius: "14px",
    width: "488px",
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
