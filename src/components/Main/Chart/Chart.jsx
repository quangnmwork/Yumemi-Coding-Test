import React from "react";
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
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import "./Chart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "日本の都道府県の人口",
      font: {
        size: 16,
      },
      color: "#81e6d9",
      animation: false,
    },
  },
};
const getLabels = () => {
  let arr = [];
  for (var i = 0; i < 18; i++) {
    arr.push(1960 + i * 5);
  }
  return arr;
};

const labels = getLabels();

const Chart = () => {
  const state = useSelector(state => state.prefecture.selectedPrefecturesData);

  let data = {
    labels,
    datasets: state.map(dataset => {
      return {
        label: dataset[1].prefName,
        data: dataset[0].data.map(el => el.value),
        borderColor: `rgb(129, 230, 2175)`,
        backgroundColor: `rgba(129, 230, 217,0.8)`,
      };
    }),
  };

  return (
    <>
      {state.length ? (
        <div className="chart">
          <Line data={data} options={options}></Line>
        </div>
      ) : null}
    </>
  );
};

export default Chart;
