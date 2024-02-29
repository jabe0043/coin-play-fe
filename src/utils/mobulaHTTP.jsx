  
  
  
  
  //-- Fetch current market data for all held cryptocurrencies. Takes an array of coin symbols
  //-- Mobula GET Market Data (batch)
  // export const fetchHoldingsDetails = (coinsSymbolArr) => {
  //   const MobulaAPIKey = 'f23be6cd-5974-49dd-891a-1271034427f9';
  //   const baseUrl = `https://api.mobula.io/api/1/market/`;
  //   let queryType = 'multi-data'
  //   const symbols = `symbols=${coinsSymbolArr.join(",")}`;
  //   const url = `${baseUrl}${queryType}?${symbols}`
  //   console.log('-- MobulaHTTP.jsx fetching holdings market data', url);

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: MobulaAPIKey
  //     },
  //   };
  //   return fetch(url, options)
  //     .then(response => response.json())
  //     .then(response => console.log('-- MobulaHTTP.jsx fetching holdings market data', response.data))
  //     .then(response => response.data)
  //     .catch(e => {
  //       console.error(e);
  //       throw e;
  //     });
  //   }


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