import { Card, Col, Row, Typography } from "antd";

import { PieChartProps } from "interfaces/home";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function PieChart({
  title,
  value,
  // series,
  colors,
}: PieChartProps) {
  return (
    <div>
      <Typography style={{ fontSize: "14", color: "#808191" }}>
        {title}
      </Typography>
      <Typography
        style={{ fontSize: "24", fontWeight: "700", color: "#11142d" }}
      >
        {value}
      </Typography>
      {/* <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
      /> */}
    </div>
  );
}
