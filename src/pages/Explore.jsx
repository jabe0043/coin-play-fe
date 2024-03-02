import { useEffect, useState } from "react";
import Trending from '../components/Trending';
import coinData from '../utils/dummyData/coinData.json'; //DUMMY DATA;
import Navbar from '../components/navbar/Navbar'; 


export default function Explore(){
  //TODO: USING DUMMY DATA FOR NOW -- marketData.jsx;
  // const [trendingCoins, setTrendingCoins] = useState(null);
  // const trending = [
  //   'BTC', 'ETH', 'USDT', 'BNB', 'SOL', 'XRP', 'USDC', 'ADA', 'AVAX', 'DOGE',
  //   'TRX', 'LINK', 'DOT', 'MATIC', 'WBTC', 'TONCOIN', 'UNI', 'ICP', 'SHIB', 'DAI'
  // ];
  // const MobulaAPIKey = 'f23be6cd-5974-49dd-891a-1271034427f9';
  // const options = {method: 'GET'};
  // const baseUrl = `https://api.mobula.io/api/1/market/`;
  // let queryType = 'multi-data'
  // const symbols = `symbols=${trending.join(",")}`;
  // const url = `${baseUrl}${queryType}?${symbols}`

  // useEffect(()=>{
  //   fetchMobula(url, options)    //-- Fetch coins
  // }, [])

  //-- Fetch cryptocurrencies 
  // const fetchMobula = (url, options) => {
    // console.log('fetching mobula', url);
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(response => {
    //     setTrendingCoins(response.data)
    //   })
    // .catch(err => console.error(err));
  // }


  //----------- DUMMY DATA -----------
  const [trendingCoins, setTrendingCoins] = useState(null);
  useEffect(()=>{
    setTrendingCoins(coinData.data)
  }, [])
  //----------- END DUMMY DATA -----------


  return(

    <div>
      <Navbar/>
      <p>EXPLORE PAGE</p>
      <div style={{width:'100%', backgroundColor:'#e0e0e0', justifySelf:'flex-start'}}>
        { trendingCoins &&
          <Trending trendingCoins={trendingCoins}></Trending>
        }
      </div>
    </div>
  )
}