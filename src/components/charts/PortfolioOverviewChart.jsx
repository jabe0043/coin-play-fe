import Chart from 'chart.js/auto'; //KEEP
import { useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import * as Styled from '../../styled/components'

//-- Doughnut chart for display available balance vs invested balance

export default function PortfolioOverviewChart({userDoc}){
  // console.log('Donut chart', userDoc);
  const { available, invested } = userDoc.portfolio; //available funds

  const data = {
    labels: ['Available Funds', 'Invested Funds'],
    datasets: [{
      data: [available, invested],
      backgroundColor: ['#8ADFB5', '#FFB6B6'],
      borderWidth: false
    }]
  }
  const options = {
    plugins: {
      legend: { display: false },
    },
  }


  return(
    <Styled.DoughnutChartContainer>
      <Doughnut data={data} options = {options} />
    </Styled.DoughnutChartContainer>
  );
}