import { useLocation } from 'react-router-dom';
// import { getTimeRange } from '../utils/calcs';
import { useEffect, useState } from 'react';
import LineChart from '../components/charts/LineCharts';
import marketData from '../utils/dummyData/marketData.json'; //DUMMY DATA;

export default function CoinDetails(){
  const location = useLocation();
  const coinInfo = location.state?.coinInfo;
  console.log('COIN DETAILS PAGE:', coinInfo);
  
  //TODO: USING DUMMY DATA FOR NOW -- marketData.jsx;
  // const MobulaAPIKey = 'f23be6cd-5974-49dd-891a-1271034427f9';
  // const baseUrl = 'https://api.mobula.io/api/1/market/history?asset';
  // const assetName = coinInfo.name;
  // let timeRange = getTimeRange('24h') //-- calculated in utils.jsx
  // const url = `${baseUrl}=${assetName}&to=${timeRange.endDate}&from=${timeRange.startDate}`;
  // const [chartData, setChartData] = useState(null);

  // useEffect(()=>{
  //   getHistoricalMarketData();
  // }, [timeRange]);

  // const getHistoricalMarketData = () => {
  //   const options = {method: 'GET'};
  //   console.log(url);
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .then(response => setChartData(response))
    //   .catch(err => console.error(err));
  // }


    //----------- DUMMY DATA -----------
    const [chartData, setChartData] = useState(null);
    useEffect(()=>{
      setChartData(marketData.data)
      // getDates();
    }, [chartData])

    //----------- END DUMMY DATA -----------

    // function getDates(){
    // //turn in to switch statement that returns the date formatted based on the requested timerange (ex: 24h, 1d, 1w etc.);
    //   console.log(chartData);
    //   if(chartData){
    //     chartData.price_history.forEach((datapoint) => {
    //       const date = new Date(datapoint[0])
    //       const year = date.getFullYear();
    //       const month = date.getMonth() + 1; // Months are zero-based, so we add 1
    //       const day = date.getDate();
    //       const hours = date.getHours();
    //       const minutes = date.getMinutes();
    //       const seconds = date.getSeconds();
    //       const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    //       console.log(formattedDate);
    //     });
    //   }
    // }




    // function formatChartData(data) {
    //   console.log('DATA:', data);
    //   const labels = []; //date
    //   const priceData = []; //price
    //   data.price_history.forEach((datapoint) => {
    //     const date = new Date(datapoint[0]);
    //     const formattedDate = `${date.getHours()}:00`; // Format the date with minutes
    //     labels.push(formattedDate);
    //       priceData.push(datapoint[1]);
    //     });
    //   return {
    //     labels,
    //     datasets: [
    //       {
    //         label: 'Price',
    //         data: priceData,
    //         borderColor: 'rgba(75,192,192,1)',
    //         borderWidth: 2,
    //         fill: true,
    //         backgroundColor: (context) => {
    //           const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
    //           gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)'); // Start color
    //           gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); // End color
    //           return gradient;
    //         },
    //       },
    //     ],
    //   };
    // }

    function formatChartData(data) {
      console.log('DATA:', data);
      const labels = []; // date
      const priceData = []; // price
      data.price_history.forEach((datapoint) => {
        const date = new Date(datapoint[0]);
        const formattedDate = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`; // Format the date with minutes
        labels.push(formattedDate);
        priceData.push(datapoint[1]);
      });
      return {
        labels,
        datasets: [
          {
            label: 'Price',
            data: priceData,
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: true,
            backgroundColor: (context) => {
              const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
              gradient.addColorStop(0, 'rgba(75, 192, 192, 0.2)'); 
              gradient.addColorStop(1, 'rgba(75, 192, 192, 0)'); 
              return gradient;
            },
          },
        ],
      };
    }


  return(
    <div>
      <p>Coin Details Page</p>
      {chartData && <LineChart data={formatChartData(chartData)} />}
    </div>
  )
}

