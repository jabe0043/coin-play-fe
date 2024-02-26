import { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import Portfolio from '../components/homepage/Portfolio';
import Assets from '../components/homepage/Assets';
import Trending from '../components/Trending';


export default function Home(){
  const [authenticatedUserToken] = useAuth();
  const [userDoc, setUserDoc] = useState();
  const [trendingCoins, setTrendingCoins] = useState(null);
  const trending = [
    'BTC', 'ETH', 'USDT', 'BNB', 'SOL', 'XRP', 'USDC', 'ADA', 'AVAX', 'DOGE',
    // 'TRX', 'LINK', 'DOT', 'MATIC', 'WBTC', 'TONCOIN', 'UNI', 'ICP', 'SHIB', 'DAI'
  ];
  const MobulaAPIKey = 'f23be6cd-5974-49dd-891a-1271034427f9';
  const options = {method: 'GET'};
  const baseUrl = `https://api.mobula.io/api/1/market/`;
  let queryType = 'multi-data'
  const symbols = `symbols=${trending.join(",")}`;
  const url = `${baseUrl}${queryType}?${symbols}`

  //-- Create || Retrieve User document in MongoDB (first mongo client request);
  useEffect(() => {
    if (authenticatedUserToken) {
      fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authenticatedUserToken}`,
        },
      })
      .then(response => response.json())
      .then(data => setUserDoc(data))
      .then(fetchMobula(url, options))    //-- Fetch coins
      .catch(error => {
        console.error('Error creating/retrieving user document:', error);
      });
    }
  }, [authenticatedUserToken]);

  //-- Fetch cryptocurrencies 
  const fetchMobula = (url, options) => {
    console.log('fetching mobula', url);
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        setTrendingCoins(response.data)
      })
    .catch(err => console.error(err));
  }

/* GRAYS
#f0f0f0
#e0e0e0
#cccccc
#b0b0b0
#999999
#7f7f7f
#666666
#4d4d4d
#333333
#1a1a1a
*/

  return (
    <>
      {userDoc && (
        <div >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', backgroundColor: '#f5f5f5' }}>
            <Portfolio userDoc={userDoc}></Portfolio>
            <Assets userDoc={userDoc}></Assets>
            <div style={{width:'100%', backgroundColor:'#e0e0e0', justifySelf:'flex-start'}}>
              { trendingCoins &&
                <Trending trendingCoins={trendingCoins}></Trending>
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
}