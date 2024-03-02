import Chart from 'chart.js/auto'; //KEEP
import { useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import randomColor from 'randomcolor';
import * as Styled from '../../styled/components'

/* INVESTMENT BREAKDOWN DOUGNUT CHART 
  - Displays the investment breakdown for each coin as a percentage relative to the user's total investments
*/ 

export default function InvestmentsBreakdownChart({ userDoc }) {
  // console.log('Portfolio Donut chart', userDoc);

  const totalInvested = userDoc.portfolio.invested;
  const holdings = userDoc.holdings;

  const getChartData = () => {
    const chartData = [];
    const labels = [];
    const colors = randomColor({ count: holdings.length, hue: 'random', luminosity: 'light' });

    holdings.forEach((coin, index) => {
      const percentage = (coin.totalHeld * coin.avgCostPerCoin) / totalInvested * 100;
      chartData.push(percentage.toFixed(2));
      labels.push(coin.coinSymbol);
    });

    return { chartData, labels, colors };
  };

  const { chartData, labels, colors } = getChartData();

  const data = {
    labels: labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: colors,
        borderWidth: false
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    tooltips: {
      displayColors: false,
      backgroundColor: '#e0e0e0',
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentValue = dataset.data[tooltipItem.index];
          return `${labels[tooltipItem.index]}: ${currentValue}%`;
        },
      },
    },
  };

  return (
    <Styled.DoughnutChartContainer>
      <Doughnut data={data} options={options} />
    </Styled.DoughnutChartContainer>
  );
}
