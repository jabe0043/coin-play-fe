import { useEffect, useState } from "react";



// Left Outside of homepage components folder because trending coins should prob go in the explore page;
export default function Trending({trendingCoins}){
  const MobulaAPIKey = 'f23be6cd-5974-49dd-891a-1271034427f9';
  const trendingCoinsArray = Object.values(trendingCoins); //convert trending coins from { {}, {} } to [ {}, {} ];
  console.log('trending coins:', trendingCoinsArray);

  useEffect(() => {
    buildTrendingCoinsList();
  }, []);

  //-- Loop through the trendingCoinds object { btc:{}, eth:{}, sol:{} } and build the list item card for it;
  const buildTrendingCoinsList = () => {
    return trendingCoinsArray.map((coin) => trendingCoinLi(coin)); //build list items;
  }

  //-- Build the table list item for each coin
  const trendingCoinLi = (coin) => {
    return (
      <div key={coin.symbol}  style={{display:'flex'}}>
        <div style={{display:'flex', flexGrow:1, justifyContent:'space-between', alignItems:'center', borderBottom: '.1rem solid #b0b0b0'}} >
          <div style={{width:150, display:'flex', gap: 10, alignItems:'center',}}>
            <img src={coin.logo} alt={`${coin.name} Logo`} style={{ width: '25px', height: '25px', borderRadius:20 }} />
            <div>
              <p style={{margin:0}}> {coin.name == 'Bridged Wrapped Bitcoin (Manta Pacific)' ? 'Wrapped Bitcoin' : coin.name} </p>
              <p style={{margin:0}}> {coin.symbol} </p>
            </div>
          </div>
          <p style={{width:150,}}> ${coin.market_cap.toLocaleString()}</p>
          <p style={{width:150, color:coin.volume_change_24h > 0 ? 'green':'red'}}>{coin.volume_change_24h > 0 ? `+${coin.volume_change_24h.toPrecision(2)}%` : `${coin.volume_change_24h.toPrecision(2)}%`}</p>
          <p style={{width:150, color:coin.price_change_24h > 0 ? 'green':'red'}}>{coin.price_change_24h > 0 ? `+${coin.price_change_24h.toPrecision(2)}%` : `${coin.price_change_24h.toPrecision(2)}%`}</p>
          <p style={{width:150}}>${coin.price.toFixed(2).toLocaleString('en-Us')}</p>
          <button style={{width:50, height:25, borderRadius:50, border:'none', alignSelf:'center'}}>Trade</button>
        </div>
      </div>
    );
  }


  //-- Get the timeframe for a coin's historical market data (1h, 24h, 7d, 1m, 3m, 6m, 1y, all) to be used in coin details page;
  // const historicalTimeRange = (timeframe) => {
  //   const currentDate = new Date();
  //   const period = {};
  //   switch (timeframe) {
  //     case '1h':
  //       period.startDate = currentDate.getTime() - 1 * 60 * 60 * 1000; // 1 hour ago
  //       period.endDate = currentDate.getTime();
  //       break;
  //     case '24h':
  //       period.startDate = currentDate.getTime() - 24 * 60 * 60 * 1000; // 24 hours ago
  //       period.endDate = currentDate.getTime();
  //       break;
  //     case '7d':
  //       period.startDate = currentDate.getTime() - 7 * 24 * 60 * 60 * 1000; // 7 days ago
  //       period.endDate = currentDate.getTime();
  //       break;
  //     case '1m':
  //       period.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()).getTime();
  //       period.endDate = currentDate.getTime();
  //       break;
  //     case '3m':
  //       period.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate()).getTime();
  //       period.endDate = currentDate.getTime();
  //       break;
  //     case '6m':
  //       period.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate()).getTime();
  //       period.endDate = currentDate.getTime();
  //       break;
  //     case '1y':
  //       period.startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate()).getTime();
  //       period.endDate = currentDate.getTime();
  //       break;
  //     default:
  //       period.startDate = new Date(0).getTime(); // Full historical market time range
  //       period.endDate = currentDate.getTime();
  //   }
  //   return period;
  // };



  //-- Render the trending coins table legend;
  const tableLegend = () =>{
    return(
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', }}>
        <div style={{width:150}}>
          <p>NAME</p>
        </div>
        <div style={{width:150}}>
          <p>MARKET CAP</p>
        </div>
        <div style={{width:150}}>
          <p>24H VOLUME</p>
        </div>
        <div style={{width:150}}>
          <p>24H CHANGE</p>
        </div>
        <div style={{width:150}}>
          <p>PRICE</p>
        </div>
        <div style={{width:50}} /> {/* to adjust for the trade button */}
      </div>
    );
  }


  return(
    <div >
      <h2>Top Coins</h2>
      {trendingCoins && 
      <div>
        {tableLegend()}
        {buildTrendingCoinsList()}
      </div>
      }
    </div>
  )
}