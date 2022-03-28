import React from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
Chart.register(...registerables);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data1 = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [0, 1233, 33, 112, 22, 2222, 45, 0, 1233, 33, 112, 22],
      borderColor: "#F9D85E",
      backgroundColor: "#243738",
      tension: 0.5,
      fill: true,
    },
  ],
};

const data2 = {
  labels,
  datasets: [
    {
      label: "Dataset 2",
      data: [0, 21, 233, 41, 67, 45, 44, 28, 94, 83, 71, 55],
      borderColor: "#000",
      tension: 0.5,
      fill: false,
    },
    {
      label: "Dataset 1",
      data: [0, 1233, 33, 112, 22, 2222, 45, 0, 1233, 33, 112, 22],
      borderColor: "#F9D85E",
      backgroundColor: "#243738",
      tension: 0.5,
      fill: true,
    },
  ],
};

export function LineGraph1() {
  return <Line options={options} data={data1} />;
}

export function LineGraph2() {
  return <Line options={options} data={data2} />;
}

const data3 = {
  labels: ["Red", "Blue", "Yellow", "black"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 15, 10, 10],
      backgroundColor: ["#6493F1", "#FFD600", "#57A146", "#000"],
      borderColor: ["#6493F1", "#FFD600", "#57A146", "#000"],
      borderWidth: 1,
      radius: "50%",
    },
  ],
};

const options2 = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "left",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

export function DoughnutGraph() {
  return <Doughnut data={data3} options={options2} />;
}
