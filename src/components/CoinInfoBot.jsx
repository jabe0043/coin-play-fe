
import coinMetaData from '../utils/dummyData/coinMetaData.json' //DUMMY DATA; for description, total volume, max supply


export default function CoinInfoBot({coinInfo}){

  // console.log('coin info bot component', coinInfo)


  return(
    <div style={{display:'flex', justifyContent:'space-between', paddingTop:20}}>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>MARKET CAP</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinInfo.market_cap}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>7D VOLUME</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinInfo.volume_7d}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>VOLUME</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinMetaData.data.volume}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>CIRCULATING SUPPLY</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinMetaData.data.circulating_supply}</p>
          </div>
          <div style={{display:'flex', flexDirection:'column'}}>
            <p>TOTAL SUPPLY</p>
            <p style={{alignSelf:'center', marginTop:0}}>{coinMetaData.data.total_supply}</p>
          </div>
        </div>
  )
}