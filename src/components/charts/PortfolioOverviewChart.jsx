import Chart from 'chart.js/auto'; //KEEP
import { useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";

//-- Doughnut chart for display available balance vs invested balance

export default function PortfolioOverviewChart({userDoc}){
  console.log('Donut chart', userDoc);
  const { available, invested } = userDoc.portfolio; //available funds

  const data = {
    labels: ['Available Funds', 'Invested Funds'],
    datasets: [{
      data: [available, invested],
      backgroundColor: ['#4CAF50', '#FF6384'],
      borderWidth: false
    }]
  }
  const options = {
    plugins: {
      legend: { display: false },
    },
  }


  return(
      <Doughnut data={data} options = {options} style={{maxWidth:150, maxHeight:150}}/>
  );
}