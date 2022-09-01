import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import './LineChartComponent.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({ items }) {
  const data = {
    labels: items.map((item) => item.title),
    datasets: [
      {
        label: "Daily Forecast Temperature",
        data: items.map((item) => Math.round(item.temp)),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(0, 255, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
    animations: {
      tension: {
        duration: 2000,
      easing: 'linear',
      from: 1,
      top: 0,
      loop: true,
      }
    },
  };

  return (
    <div className="line_chart_container">
      <Line data={data} height={250} options={options} />
    </div>
  );
}

export default LineChart;
