


//-- This section displays information above the line chart. 
export default function CoinInfoTop({coinInfo}){

  // console.log('CoinInfoTop Component', coinInfo);

  return(
    <div style={{display:'flex', gap:10}}>
    <img src={coinInfo.logo} alt={`${coinInfo.name} Logo`} style={{ width: '25px', height: '25px', borderRadius:20 }} />
    <div style={{width:'100%', display:'flex', flexDirection:'column', gap: 5, paddingBottom:10,}}>
      <div style={{ display:'flex', justifyContent:'space-between', gap:10}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <h1 style={{margin:0}}> {coinInfo.name}</h1>
          <p style={{margin:0}}> {coinInfo.symbol}</p>
        </div>
        <div style={{display:'flex', gap:20}}>
          <p>{`ATH $${coinInfo.ath.toFixed(2).toLocaleString('en-Us')}`}</p>
          <p>{`ATL $${coinInfo.atl.toFixed(2).toLocaleString('en-Us')}`}</p>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <p style={{margin:0}}>{`$${coinInfo.price.toFixed(2).toLocaleString('en-Us')} USD`}</p>
          <p style={{margin:0, color:coinInfo.volume_change_24h > 0 ? 'green':'red'}}> {`${coinInfo.price_change_24h.toFixed(2).toLocaleString('en-Us')}%`}<span style={{color:'black'}}>{`(24H)`}</span></p>
        </div>
        <div style={{display:'flex', gap:15}}>
          <p>1H</p>
          <p>24H</p>
          <p>7D</p>
          <p>3M</p>
          <p>6M</p>
          <p>1Y</p>
          <p>ALL</p>
        </div>
      </div>
    </div>
  </div>
  )
}