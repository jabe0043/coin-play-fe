import Chart from 'chart.js/auto'; //KEEP
import { Line } from "react-chartjs-2";

export default function LineChart({ data }) {
  const isMobile = window.innerWidth <= 768; //-- If mobile screen, load max 6 x axis ticks instead of 12;

  const chartOptions = {
    plugins: {
      title: {display: false},
      legend: {display: false},
      interaction: {
        mode: 'index',
        intersect: false,
      },
      tooltip: {
        backgroundColor:'#f1f6f9',
        bodyColor:'#393e46',
        titleColor:'#14274e',
        titleFont:{weight:'bold'},
        displayColors:false,
        intersect: false,
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y || 0;
            return `${label} (USD): $${value.toFixed(4)}`;
          },
        },
      },
    },
    elements: {point: {radius: 0}},
    scales:{
      x: {
        grid:{display: false, drawTicks: true},
        ticks: {
          maxTicksLimit: isMobile ? 6 : 12, // X axis text limit for mobile and desktop
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y:{
        grid:{color:'#f1f6f9', drawTicks: false},
        ticks: {
          maxTicksLimit: isMobile ? 4 : 7, // Y axis text limit for mobile and desktop
          maxRotation: 0,
          minRotation: 0,
        },
      }
    }
  };

  return (
      <Line data={data} options={chartOptions} />
  );
}

