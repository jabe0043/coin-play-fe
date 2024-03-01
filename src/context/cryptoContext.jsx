import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./userContext";
import { getTimeRange, formatChartData } from '../utils/calcs';

const CryptoContext = createContext();


function CryptoProvider(props) {
  const [getUserDoc, userDoc] = useUser();
  const [selectedHolding, setSelectedHolding] = useState(null) //-- selected coin from user's holding
  const [ cryptoData, setCryptoData ] = useState(null);
  const [ chartData, setChartData ] = useState(null);
  // const [ chartTimeRange, setChartTimeRange] = useState(null);


  const fetchMobulaCryptoAPI = async (url) => {
    const MobulaAPIKey = 'f23be6cd-5974-49dd-891a-1271034427f9';
    console.log('Crypto Context FETCHING DATA', url);
    const options = {
      method: 'GET',
      headers: { Authorization: MobulaAPIKey },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data.data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  };
  


//-- Get current market data for a user's held coins;
  const getUpdatedCryptoData = async () => {
    const baseUrl = `https://api.mobula.io/api/1/market/`;
    const coinSymbols = `symbols=${userDoc.holdings.map((coin) => coin.coinSymbol).join(",")}`;
    let queryType = 'multi-data' 
    const url = `${baseUrl}${queryType}?${coinSymbols}`
    //TODO: COMMENTED OUT TO PREVENT EXCESSIVE API CALLS
    console.log('updated crypto data url (NOT FETCHING)',url);
    // try{
    //   let updatedData = await fetchMobulaCryptoAPI(url);
    //   const updatedDataArr = Object.values(updatedData); //convert trending coins from { {}, {} } to [ {}, {} ];
    //   setCryptoData(updatedDataArr);
    // } catch (e){
    //   console.log(e)
    // }
  }


  //timerange (str): (1h, 24h, 7d, 1m, 3m, 6m, 1y, all)
  const getCoinMarketData = async (coinName, timeRange) => {
    const baseUrl = 'https://api.mobula.io/api/1/market/history?asset';
    let period = getTimeRange(timeRange)    //-- calculated in utils.jsx
    const url = `${baseUrl}=${coinName}&to=${period.endDate}&from=${period.startDate}`;
    //TODO: COMMENTED OUT TO PREVENT EXCESSIVE API CALLS
    console.log('Selected crypto market data url (NOT FETCHING)',url);
    // try{
    //   let historicalData = await fetchMobulaCryptoAPI(url);
    //   console.log('market data: ', historicalData);
    //   let formattedChartData = formatChartData(historicalData)
    //   setChartData(formattedChartData);
    // } catch (e){
    //   console.log(e)
    // }
  }




  return <CryptoContext.Provider value={[cryptoData, getUpdatedCryptoData, selectedHolding, setSelectedHolding, getCoinMarketData, chartData]} {...props} />;
}

function useCrypto() {
  const context = useContext(CryptoContext);
  if (!context) throw new Error("Not inside the Provider");
  return context;
}

export { useCrypto, CryptoProvider };