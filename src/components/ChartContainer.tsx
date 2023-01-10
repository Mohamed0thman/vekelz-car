import React, { useState } from "react";
import { AreaChart, VerticalvarChart } from ".";

type Props = {
  title: string;
  isAreaChart?: boolean;
};

const ChartContainer = ({ isAreaChart, title }: Props) => {
  return (
    <div className="chart-content">
      <h3 style={{ marginBottom: "24px" }}>
        {title} <span style={{ fontWeight: "400" }}>Statistics</span>
      </h3>

      {isAreaChart ? (
        <AreaChart primaryColor="#FF764C" />
      ) : (
        <VerticalvarChart primaryColor="#2884FF" />
      )}
    </div>
  );
};

export default ChartContainer;
