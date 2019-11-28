import React from "react";
import PropTypes from "prop-types";
import {
  LineChart as LineReChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const LineChart = ({ data, activeTab }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineReChart
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={activeTab} stroke="#8884d8" />
      </LineReChart>
    </ResponsiveContainer>
  );
};

LineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired
};

export default LineChart;
