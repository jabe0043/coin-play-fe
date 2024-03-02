
import coinMetaData from '../utils/dummyData/coinMetaData.json' //DUMMY DATA; for description, total volume, max supply

//TODO: COIN METADATA IS DUMMY DATA
export default function CoinInfoBot({coinInfo}){
  console.log('coin info bot component', coinInfo)
  
  const cardInfo = [
    { label: 'MARKET CAP', source: coinInfo.market_cap.toLocaleString('en-Us') },
    { label: '7D VOLUME', source: coinInfo.volume_7d.toLocaleString('en-Us') },
    { label: 'VOLUME', source: coinMetaData.data.volume.toLocaleString('en-Us') },
    { label: 'CIRC. SUPPLY', source: coinMetaData.data.circulating_supply.toLocaleString('en-Us') },
    { label: 'TOTAL SUPPLY', source: coinMetaData.data.total_supply.toLocaleString('en-Us') },
    { label: 'PLACEHOLDER', source:'PLACEHOLDER'},
  ];


  const buildCoinInfoCards = () =>{
    const CoinInfocards = cardInfo.map(({label, source}) => (
      <div className='coinInfo__card' style={{padding:'.5rem', borderRadius:'.5rem'}}key={label}>
        <small style={{color:'gray'}}>{label}</small>
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