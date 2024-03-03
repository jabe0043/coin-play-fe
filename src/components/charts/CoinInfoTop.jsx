import { useEffect, useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";


//-- This section displays information above the line chart. 
export default function CoinInfoTop({coinInfo}){
  const [selectedTimeRangeBtn, setSelectedTimeRangeBtn] = useState('24H'); //TODO: IMPLEMENT to fetch updated time range market data in useEffect
  const timeRanges = ['1H', '24H', '7D', '3M', '6M', '1Y', 'ALL'];
  const [isBookmarked, setIsBookmarked] = useState(false);

  //TODO:
  useEffect(()=>{
    console.log(selectedTimeRangeBtn);
  }, [selectedTimeRangeBtn])

  // console.log('CoinInfoTop Component', coinInfo);

  const BuildTimePeriodBtns = () => {
    const btns = timeRanges.map((timeRange, index) => {
      return (
        selectedTimeRangeBtn &&
          <button
            id={index}
            className='timePeriod__btn'
            key={index}
            style={{ backgroundColor: timeRanges[index] === selectedTimeRangeBtn ? '#D3DDE6' : '#f1f6f9' }}
            onClick={() => setSelectedTimeRangeBtn(timeRanges[index])}
          >
            <small>{timeRange}</small>
          </button>
      )});
    return btns;
  };
  

  return(
    <>
        {/* Chart TITLE Section */}
    <div style={{ display: 'flex', justifyContent: 'flex-start', borderBottom: '1px solid #D3DDE680', paddingBottom:'.5rem', marginBottom:'.5rem'}}>
      <img src={coinInfo.logo} alt={`${coinInfo.name} Logo`} style={{ maxWidth: '40px', maxHeight: '40px', borderRadius: 20 }} />
      <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
        <h2 style={{ margin: 0, lineHeight: 1 }}>{coinInfo.name}</h2>
        <small style={{ margin: 0 }}> {coinInfo.symbol}</small>
      </div>
      <button className="bookmark__btn" onClick={()=> setIsBookmarked(!isBookmarked)}> 
        {isBookmarked ? <IoBookmark/> : <IoBookmarkOutline />}
      </button>
    </div>
    
    {/* PRICE info and time range btns  */}
    <div style={{display:'flex', justifyContent:'space-between', gap:50, paddingBottom:'1rem'}}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'flex-start' }}>
        <p style={{margin:0, display:'flex', alignItems:'center',}}>
          <BiDollar size={16}/>
          <strong style={{fontSize:'large'}}>{`${coinInfo.price.toFixed(2).toLocaleString('en-US')}`}</strong>
          <span style={{color:'gray', paddingLeft:5, marginTop:2}}><small>{`USD`}</small></span>
        </p>
        <p style={{marginTop:-5, color:coinInfo.price_change_24h > 0 ? 'green':'red', display:'flex', alignItems:'center'}}>
          {
            coinInfo.price_change_24h > 0
            ?
            <MdOutlineArrowDropUp style={{ color: 'green' }} size={20} />
            :
            <MdOutlineArrowDropDown style={{ color: 'red' }} size={20} />
          }
          <strong>{`${coinInfo.price_change_24h.toFixed(2).toLocaleString('en-Us')}%`}</strong>
          <span style={{color:'gray', paddingLeft:5}}><small>{`24H`}</small></span>
        </p>
      </div>
      
      <div className="timePeriod__btn--container">
        {selectedTimeRangeBtn && BuildTimePeriodBtns()}
      </div>
    </div>
    </>
  )
}