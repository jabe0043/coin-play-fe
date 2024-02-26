import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";



// Left Outside of homepage components folder because trending coins should prob go in the explore page;
export default function Trending({trendingCoins}){
  const navigate = useNavigate();
  const trendingCoinsArray = Object.values(trendingCoins); //convert trending coins from { {}, {} } to [ {}, {} ];

  useEffect(() => {
    buildTrendingCoinsList();
  }, []);

  //-- Navigate to CoinDetails page and pass the coin details as prop;
  const handleTradeClick = (coin) => {
    navigate(`/coin/${coin.symbol}`, { state: { coinInfo: coin } });
  };

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
          <button onClick={()=>handleTradeClick(coin)} style={{width:50, height:25, borderRadius:50, border:'none', alignSelf:'center'}}>Trade</button>
        </div>
      </div>
    );
  }

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
        <div style={{width:50}} /> {/* to adjust spacing for the trade button */}
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