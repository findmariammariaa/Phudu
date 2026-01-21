import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

/* 🔺 Triangle shape for bar */
const getTrianglePath = (x, y, width, height) => `
  M${x},${y + height}
  C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
  Z
`;

const TriangleBar = ({ fill, x, y, width, height }) => {
  if (x == null || y == null || width == null || height == null) return null;
  return <path d={getTrianglePath(x, y, width, height)} fill={fill} />;
};

/* 🎨 Color palette for bars */
const COLORS = ["#0ea5e9", "#facc15", "#16a34a", "#f97316", "#3b82f6", "#dc2626"];

const TriangleChart = ({ doctors }) => {
  const chartData = doctors.map((doc) => ({ name: doc.name, fee: doc.fee }));

  // Map fee → color dynamically
  const feeColorMap = {};
  let colorIndex = 0;
  chartData.forEach((item) => {
    if (!feeColorMap[item.fee]) {
      feeColorMap[item.fee] = COLORS[colorIndex % COLORS.length];
      colorIndex++;
    }
  });

  return (
    <div className="bg-white mx-3 p-2 lg:p-6 rounded-3xl shadow-lg my-5 lg:my-10">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          {/* Grid boxes */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* X and Y axes */}
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis interval={0} tickCount={Math.ceil(Math.max(...chartData.map(d => d.fee)) / 200) + 1} />

          <Tooltip formatter={(value) => `৳ ${value}`} />

          {/* Triangle bars */}
          <Bar dataKey="fee" shape={<TriangleBar />}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={feeColorMap[entry.fee]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TriangleChart;
