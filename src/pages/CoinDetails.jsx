import { useLocation } from 'react-router-dom';
// import { getTimeRange } from '../utils/calcs';
import { useEffect, useState } from 'react';
import LineChart from '../components/charts/LineCharts';
import marketData from '../utils/dummyData/marketData.json'; //DUMMY DATA;
import coinMetaData from '../utils/dummyData/coinMetaData.json' //DUMMY DATA; for description, total volume, max supply
import BuySell from '../components/BuySell';
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
    <div style={{display:'flex', gap:10}}>
      {/* TODO: This whole thing should be a component */}
      <div style={{maxWidth:'60%', backgroundColor:'#e0e0e0', padding:10, borderRadius:10}}>   
        {/* COIN TITLE SECTION */}     
        <div style={{display:'flex', gap:10}}>
          <img src={coinInfo.logo} alt={`${coinInfo.name} Logo`} style={{ width: '25px', height: '25px', borderRadius:20 }} />
          <div style={{width:'100%', display:'flex', flexDirection:'column', gap: 5, paddingBottom:10,}}>
            <div style={{ display:'flex', justifyContent:'space-between', gap:10}}>
              <div style={{display:'flex', alignItems:'center', gap:10}}>
                <h1 style={{margin:0}}> {coinInfo.name}</h1>
                <p> {coinInfo.symbol}</p>
              </div>
              <div style={{display:'flex', gap:20}}>
                <p>{`ATH $${coinInfo.ath.toFixed(2).toLocaleString('en-Us')}`}</p>
                <p>{`ATL $${coinInfo.atl.toFixed(2).toLocaleString('en-Us')}`}</p>
              </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{display:'flex', alignItems:'center', gap:10}}>
                <p style={{margin:0}}>{`$${coinInfo.price.toFixed(2).toLocaleString('en-Us')} USD`}</p>
                <p style={{margin:0, color:coinInfo.volume_change_24h > 0 ? 'green':'red'}}> {`${coinInfo.price_change_24h.toFixed(2).toLocaleString('en-Us')}%`}<span style={{color:'black'}}>{`(24H)`}</span></p>
              </div>
              <div style={{display:'flex', gap:15}}>
                <p>1H</p>
                <p>24H</p>
                <p>7D</p>
                <p>3M</p>
                <p>6M</p>
                <p>1Y</p>
                <p>ALL</p>
              </div>
            </div>
          </div>
        </div>
        {/* COIN CHART SECTION */}     
        {chartData && <LineChart data={formatChartData(chartData)} />}
        {/* COIN INFO SECTION */}     
        <div style={{display:'flex', justifyContent:'space-between', paddingTop:20}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>MARKET CAP</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinInfo.market_cap}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>7D VOLUME</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinInfo.volume_7d}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>VOLUME</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinMetaData.data.volume}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>CIRCULATING SUPPLY</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinMetaData.data.circulating_supply}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>TOTAL SUPPLY</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinMetaData.data.total_supply}</p>
          </div>
        </div>
        {/* COIN DESCRIPTION SECTION */}     
        <div>
          <p>{coinMetaData.data.description}</p>
        </div>
      </div>

      <BuySell coin={coinInfo}></BuySell>
    </div>
  )
}

