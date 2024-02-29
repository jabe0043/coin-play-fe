import Chart from 'chart.js/auto'; //KEEP
import { Line } from "react-chartjs-2";

export default function LineChart({ data }) {
  const chartOptions = {
    plugins: {
      title: {display: false},
      legend: {display: false},
      interaction: {
        mode: 'index',
        intersect: false,
      },
      tooltip: {
        backgroundColor:'#e0e0e0',
        bodyColor:'#4d4d4d',
        titleColor:'#333333',
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
          maxTicksLimit: 12,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y:{
        grid:{color:'#f0f0f0', drawTicks: false},
      }
    }
  };

  return (
    // <div style={{maxWidth:800, height:500}}>
      <Line data={data} options={chartOptions} />
    // </div>
  );
}

