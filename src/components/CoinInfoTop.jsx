import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";


//-- This section displays information above the line chart. 
export default function CoinInfoTop({coinInfo}){
  const timeRanges = ['1H', '24H', '7D', '3M', '6M', '1Y', 'ALL'];

  // console.log('CoinInfoTop Component', coinInfo);

  const BuildTimePeriodBtns= () =>{
    const btns = timeRanges.map((timeRange, index) => (
      <button className={'timePeriod__btn'} key={index}><small>{timeRange}</small></button>
    ));
    return btns;
  };

  return(
    <>
        {/* Chart TITLE Section */}
    <div style={{ display: 'flex', justifyContent: 'flex-start', borderBottom: '1px solid #D3DDE680', paddingBottom:'.5rem', marginBottom:'.5rem'}}>
      <img src={coinInfo.logo} alt={`${coinInfo.name} Logo`} style={{ maxWidth: '30px', maxHeight: '30px', borderRadius: 20 }} />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
        <h2 style={{ margin: 0, lineHeight: 1 }}>{coinInfo.name}</h2>
        <small style={{ margin: 0 }}> {coinInfo.symbol}</small>
      </div>
      <div style={{display: 'flex', gap:2, flexDirection:'column', marginLeft: 'auto', color:'gray' }}>
        <small style={{ margin: 0 }}> {`ATH: $${coinInfo.ath.toFixed(2).toLocaleString('en-Us')}`}</small>
        <small style={{ margin: 0 }}> {`ATL: $${coinInfo.atl.toFixed(2).toLocaleString('en-Us')}`}</small>
      </div>
    </div>
    
    {/* PRICE info and time range btns  */}
    <div style={{display:'flex', justifyContent:'space-between', gap:50}}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'flex-start' }}>
        <p style={{margin:0}}>
          <strong>{`$${coinInfo.price.toFixed(2).toLocaleString('en-Us')}`}</strong>
          <span style={{color:'gray', paddingLeft:5}}><small>{`USD`}</small></span>
        </p>
        <p style={{marginTop:-5, color:coinInfo.price_change_24h > 0 ? 'green':'red', display:'flex', alignItems:'center'}}>
          {
            coinInfo.price_change_24h > 0
            ?
            <MdOutlineArrowDropUp style={{ color: 'green' }} />
            :
            <MdOutlineArrowDropDown style={{ color: 'red' }} />
          }
          <strong>{`${coinInfo.price_change_24h.toFixed(2).toLocaleString('en-Us')}%`}</strong>
          <span style={{color:'gray', paddingLeft:5}}><small>{`24H`}</small></span>
        </p>
      </div>
      
      <div className="timePeriod__btn--container">
        {BuildTimePeriodBtns()}
      </div>
    </div>
    </>
  )
}