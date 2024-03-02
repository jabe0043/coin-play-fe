import { RxQuestionMarkCircled } from "react-icons/rx";

import coinMetaData from '../utils/dummyData/coinMetaData.json' //DUMMY DATA; for description, total volume, max supply

//TODO: COIN METADATA IS DUMMY DATA
export default function CoinInfoBot({coinInfo}){
  console.log('coin info bot component', coinInfo)
  
  const cardInfo = [
    { label: 'MARKET CAP', source: coinInfo.market_cap.toLocaleString('en-US'), description: 'Market Capitalization' },
    { label: '7D VOLUME', source: coinInfo.volume_7d.toLocaleString('en-US'), description: '7-Day Volume' },
    { label: 'VOLUME', source: coinMetaData.data.volume.toLocaleString('en-US'), description: 'Volume' },
    { label: 'CIRC. SUPPLY', source: coinMetaData.data.circulating_supply.toLocaleString('en-US'), description: 'Circulating Supply' },
    { label: 'TOTAL SUPPLY', source: coinMetaData.data.total_supply.toLocaleString('en-US'), description: 'Total Supply' },
    { label: 'PLACEHOLDER', source: 'PLACEHOLDER', description: 'Placeholder Description' },
  ];
  


  const buildCoinInfoCards = () =>{
    const CoinInfocards = cardInfo.map(({label, source, description}) => (
      <div className='coinInfo__card' style={{padding:'.5rem', borderRadius:'.5rem'}}key={label}>
        <span className='coinInfo__card--title'>
          <small >{label} </small>
          <RxQuestionMarkCircled style={{marginTop:-1}} /> 
          {/* <div className="tooltip">{description}</div> */}
        </span>
        <p>{source}</p>
      </div>
    ));
    return CoinInfocards;
  };



  return(
    <div className='coinInfo__cards--container'>
      {buildCoinInfoCards()}
    </div>
  )
}