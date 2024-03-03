import { useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';



// Left Outside of homepage components folder because trending coins should prob go in the explore page;
export default function Trending({trendingCoins}){
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 850 }); //-- get screen size to dynamically render top coins table elements
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

  //TODO: Use grid instead of flexbox to get table titles and table contents properly aligned on desktop;
  //-- Build the table list item for each coin
  const trendingCoinLi = (coin) => {

    return (
      <div key={coin.symbol} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', borderTop: '1px solid #D3DDE680', paddingTop:'.5rem', paddingBottom:'.5rem' }}>
        {isMobile ? (
          <>
            <div style={{ width: '50%', display: 'flex', gap: 10, alignItems: 'center',  paddingTop:'.5rem', paddingBottom:'.5rem' }}>
              <img src={coin.logo} alt={`${coin.name} Logo`} style={{ width: '25px', height: '25px', borderRadius: 20 }} />
              <div style={{width:'100%'}}>
                <p>{coin.name}</p>
                <small>{coin.symbol}</small>
              </div>
            </div>
            <div style={{ width: '60%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p >${coin.price.toFixed(2).toLocaleString('en-Us')}</p>
                <small style={{width:150, color:coin.price_change_24h > 0 ? 'green':'red'}}>{coin.price_change_24h > 0 ? `+${coin.price_change_24h.toPrecision(2)}%` : `${coin.price_change_24h.toPrecision(2)}%`}</small>
              </div>
              <button onClick={() => handleTradeClick(coin)} style={{ width: '4.5rem', height: '1.75rem', color: 'white', fontWeight: 'bold', borderRadius: 20, border: 'none', marginLeft: '0.5rem', backgroundColor: '#18a4e0' }}>Trade</button>
            </div>
          </>
        ) : (
          <>
            {/* DESKTOP VIEW */}
            <div style={{display:'flex', flexGrow:1, justifyContent:'space-between', alignItems:'center',}} >
              <div style={{width:150, display:'flex', gap: 10, alignItems:'center',}}>
                <img src={coin.logo} alt={`${coin.name} Logo`} style={{ width: '25px', height: '25px', borderRadius:20 }} />
                <div>
                  <p style={{margin:0}}> {coin.name} </p>
                  <p style={{margin:0}}> {coin.symbol} </p>
                </div>
              </div>
              <p style={{width:150,}}> ${coin.market_cap.toLocaleString()}</p>
              <p style={{width:150, color:coin.volume_change_24h > 0 ? 'green':'red'}}>{coin.volume_change_24h > 0 ? `+${coin.volume_change_24h.toPrecision(2)}%` : `${coin.volume_change_24h.toPrecision(2)}%`}</p>
              <p style={{width:150, color:coin.price_change_24h > 0 ? 'green':'red'}}>{coin.price_change_24h > 0 ? `+${coin.price_change_24h.toPrecision(2)}%` : `${coin.price_change_24h.toPrecision(2)}%`}</p>
              <p style={{width:150}}>${coin.price.toFixed(2).toLocaleString('en-Us')}</p>
              <button onClick={()=>handleTradeClick(coin)} style={{width:'4.5rem', height:'1.75rem', color:'white', fontWeight:'bold', borderRadius:20, border:'none', alignSelf:'center', backgroundColor:'#18a4e0'}}>Trade</button>
            </div>
          </>
        )}
      </div>
    );
  }

  //-- Render the trending coins table legend;
  const TableLegend = () => {
    const columns = [
      { label: 'NAME', width: 150 },
      { label: 'MARKET CAP', width: 150 },
      { label: '24H VOLUME', width: 150 },
      { label: '24H CHANGE', width: 150 },
      { label: 'PRICE', width: 150 },
      { label: '', width: 50 },
    ];
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft:'2rem', paddingRight:'4.5rem', paddingBottom:'1rem', }}>
      {isMobile ? (
        <>
          <div key={columns[0].index} style={{ width: '40%',  }}>
            <p style={{color:"#9BA4B4" }}>{columns[0].label}</p>
          </div>
          <div key={columns[4].index} style={{ width: '50%' }}>
            <p style={{color:"#9BA4B4" }}>{columns[4].label}</p>
          </div>
        </>
        ) : ( 
          <>
            {columns.map((column, index) => (
            <div key={index} style={{ width: column.width }}>
              <p>{column.label}</p>
            </div>
        ))}
          </>
        )}
      </div>
    );
  };


  return(
    <div >
      <h2>Top Coins</h2>
      {trendingCoins && 
      <div style={{backgroundColor:'white', padding:'1rem', borderRadius:'.5rem', boxShadow:'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'}}>
        {TableLegend()}
        {buildTrendingCoinsList()}
      </div>
      }
    </div>
  )
}