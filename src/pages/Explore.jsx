import { useEffect, useState } from "react";
import coinData from '../utils/dummyData/coinData.json'; //DUMMY DATA;
import Navbar from '../components/navbar/Navbar'; 
import Trending from '../components/explorepage/Trending';
import MostTraded from "../components/explorepage/MostTraded";

export default function Explore(){
  //TODO: USING DUMMY DATA FOR EVERYTHING IN EXPLORE SECTION FOR NOW -- marketData.jsx;

  //----------- DUMMY DATA -----------
  const [trendingCoins, setTrendingCoins] = useState(null);
  useEffect(()=>{
    setTrendingCoins(coinData.data)
  }, [])
  //----------- END DUMMY DATA -----------


  return(

    <div>
      <Navbar/>
      <MostTraded trendingCoins={trendingCoins}></MostTraded>
      <div className="container" >
        { trendingCoins &&
          <>
            <Trending trendingCoins={trendingCoins}></Trending>
          </>
        }
      </div>
    </div>
  )
}