import { useLocation } from 'react-router-dom';
// import { getTimeRange } from '../utils/calcs';
import { useEffect, useState } from 'react';
import LineChart from '../components/charts/LineCharts';
import marketData from '../utils/dummyData/marketData.json'; //DUMMY DATA;
import coinMetaData from '../utils/dummyData/coinMetaData.json' //DUMMY DATA; for description, total volume, max supply
import BuySell from '../components/BuySell';
import CoinInfoTop from '../components/charts/CoinInfoTop';
import CoinInfoBot from '../components/charts/CoinInfoBot';
import Navbar from '../components/navbar/Navbar'; 
import * as Styled from '../styled/components';

//TODO: NOT CONNECTED TO CRYPTO CONTEXT!!
export default function CoinDetails(){
  const location = useLocation();
  const coinInfo = location.state?.coinInfo;
  // console.log('COIN DETAILS PAGE:', coinInfo);

    //----------- DUMMY DATA -----------
    const [chartData, setChartData] = useState(null);
    useEffect(()=>{
      setChartData(marketData.data) //dummy data
      // fetchCoinMetadata();
      // console.log('metadata: ', coinMetaData.data)
    }, [chartData])

    //----------- END DUMMY DATA -----------


    //-- GET coin metadata for displaying info like description, 
    // function fetchCoinMetadata(){
    //   const options = {method: 'GET'};
    //   fetch(`https://api.mobula.io/api/1/metadata?asset=${coinInfo.name}`, options)
    //   .then(response => response.json())
    //   .then(response => console.log('coin metadata:', response))
    //   .catch(err => console.error(err));
    // }


    function formatChartData(data) {
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
    <>
    <Navbar/>
    <div className='container details__page--container'>
      <Styled.AssetsContainer className='whiteShadow'>
        <CoinInfoTop coinInfo={coinInfo}></CoinInfoTop>
        {chartData && <LineChart data={formatChartData(chartData)} />}
        <CoinInfoBot coinInfo={coinInfo}></CoinInfoBot> 

        <div style={{paddingTop:'1rem'}}>
          <p>{coinMetaData.data.description}</p>
        </div>
      </Styled.AssetsContainer>

      <BuySell coin={coinInfo}></BuySell>
    </div>
    </>
  )
}

