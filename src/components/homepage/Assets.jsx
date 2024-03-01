import { useEffect, useState } from 'react';
import { useUser } from '../../context/userContext';
import { useCrypto } from '../../context/cryptoContext';
import LineChart from '../charts/LineCharts';
import CoinInfoTop from '../CoinInfoTop';
import CoinInfoBot from '../CoinInfoBot';
/*
  1. - Crypto context gets updated crypto data (cryptoData) for all coins in the holdings array and puts them inside of cryptoData state var
  2. - The loaded chart data is dictated by the selectedHolding var. selectedHoldingVar contains the holding obj. from user.holdings
    --> Default is index[0] in user.holdings. 
    --> Changes on Li press from the "Your Holdings" component
  3. loadSelectedCoinData() matches the selectedHolding var with respective coin in cryptoData 

*/
export default function Assets(){
  const [getUserDoc, userDoc, setUserDoc, processUserTransaction, getHeldCoinsData] = useUser();
  const [cryptoData, getUpdatedCryptoData, selectedHolding, setSelectedHolding, getCoinMarketData, chartData] = useCrypto();
  // const [selectedCoin, setSelectedCoin] = useState(userDoc.holdings[0]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(()=>{
    //otherwise crash if new user;
    if (userDoc.holdings.length > 0){
      getUpdatedCryptoData(); //TODO: commented to prevent excessive api calls;
      setSelectedHolding(userDoc.holdings.length > 0 ? userDoc.holdings[0] : null);
    }
  }, [])

  useEffect(()=>{
    if(selectedHolding){
      loadSelectedCoinData();
      getCoinMarketData(selectedHolding.coinName, '24h')
      console.log(selectedHolding.coinName);
    }
  }, [selectedHolding, cryptoData])


  const loadSelectedCoinData = () => {
    if(cryptoData){
      const selection = cryptoData.find((coin) => coin.symbol === selectedHolding.coinSymbol)
      setSelectedCoin(selection)
    }
  }
  // console.log(selectedCoin);

  

  return(
    <div style={{ minWidth:'50vw', backgroundColor:'#e0e0e0' }}>
      {(userDoc.holdings.length > 0) && chartData && selectedCoin &&
      <>
        <CoinInfoTop coinInfo={selectedCoin}></CoinInfoTop>
        <LineChart data={chartData} />
        <CoinInfoBot coinInfo={selectedCoin}></CoinInfoBot>
      </>
      }
    </div>

  )
}