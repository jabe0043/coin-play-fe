import { RxQuestionMarkCircled } from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { useUser } from '../../context/userContext';
import coinMetaData from '../../utils/dummyData/coinMetaData.json' //DUMMY DATA; for description, total volume, max supply
import { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import BuySell from "../BuySell";

//TODO: COIN METADATA IS DUMMY DATA
export default function CoinInfoBot({coinInfo}){
  const userDoc = useUser();
  const location = useLocation();
  const [isBuySellModalOpen, setIsBuyModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust the breakpoint accordingly

  console.log('coin info bot component', coinInfo)
  // console.log('Current Location', location)
  console.log('Coin Info Bot userDoc:', userDoc)

  const cardInfo = [
    { label: 'MARKET CAP', source: coinInfo.market_cap.toLocaleString('en-US'), description: 'Market Capitalization' },
    { label: '7D VOLUME', source: coinInfo.volume_7d.toLocaleString('en-US'), description: '7-Day Volume' },
    { label: 'VOLUME', source: coinMetaData.data.volume.toLocaleString('en-US'), description: 'Volume' },
    { label: 'CIRC. SUPPLY', source: coinMetaData.data.circulating_supply.toLocaleString('en-US'), description: 'Circulating Supply' },
    { label: 'ATH', source: coinInfo.ath.toFixed(2).toLocaleString('en-Us'), description: 'Placeholder Description' },
    { label: 'ATL', source: coinInfo.atl.toFixed(2).toLocaleString('en-Us'), description: 'Placeholder Description' },
  ];
  
  const buildCoinInfoCards = () =>{
    const CoinInfocards = cardInfo.map(({label, source, description}) => (
      <div key={label} className='coinInfo__card' style={{padding:'.5rem', borderRadius:'.5rem'}}>
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


  //-- Get Profit/Loss percentage of a user's coin investment
  const getProfitOrLoss = (userCoinDetails) =>{
    const currentCoinPrice = coinInfo.price;
    const { avgCostPerCoin, totalHeld } = userCoinDetails;
    const amountSpent = totalHeld * avgCostPerCoin; //-- Amount user spent to buy the coins 
    const valueChange = totalHeld * currentCoinPrice; //-- Amount the coin is worth based on current market rate
    const profitLossPercentage = ((valueChange - amountSpent) / amountSpent) * 100;
    return profitLossPercentage.toFixed(2).toLocaleString('en-Us')
  }

  const buildStatsCards = () =>{
    const selectedCoin = userDoc[1].holdings.find((coin) => coin.coinName === coinInfo.name);
    const profitPercent = getProfitOrLoss(selectedCoin);
    const cardInfo = [
      {label: 'HELD', source: selectedCoin.totalHeld, description: `You own ${selectedCoin.totalHeld} ${selectedCoin.coinSymbol}`},
      {label: 'CPC', source: `$ ${selectedCoin.avgCostPerCoin.toFixed(2).toLocaleString('en-Us')}`, description: `Your average cost per coin`},
      {label: 'CHANGE', source: `${profitPercent} %`, description: `Your percentage of gain/loss on this asset`},
    ]
    console.log(cardInfo)
    // return cardInfo
    const StatCards = cardInfo.map(({label, source, description})=>(
      <div key={label} style={{width:'auto', display:'flex', flexDirection:'column', borderRadius:'.5rem'} } >
        <small className='coinInfo__card--title'> {label} </small>
        <p style={{fontSize:'large', fontWeight:'500',}}> 
          {source} 
        </p>
      </div>
    ));

    return StatCards;
  }


  const handleModal = () =>{
    setIsBuyModalOpen(!isBuySellModalOpen);
  }

  return(
    <>
      <div className='coinInfo__cards--container' style={{paddingBottom:'1.5rem', }}>
        {buildCoinInfoCards()}
      </div>
      
      {/* Extra styling for home page version */}
      { location.pathname === '/home' && 
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', borderTop: '1px solid #D3DDE680', paddingTop:'.5rem'}}>
          {buildStatsCards()}
          <button className="buySell--btn" style={{minHeight:'100%', padding:'.5rem', display:'flex', }}
            onClick={()=> handleModal()}
          >
            {`Trade ${coinInfo.symbol}`}
          </button>
        </div>
      }   

      <ReactModal
        isOpen={isBuySellModalOpen}
        onRequestClose={handleModal}
        style={{
          content: {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            padding: 0,
            position: isMobile ? 'absolute' : 'relative',
            bottom: isMobile ? 0 : 'auto',
            right: isMobile ? 0 : 'auto', // Set right to 0 for mobile, 'auto' for desktop
            left: isMobile ? 0 : '65vw',
            top: isMobile ? 'auto' : 0,
            maxHeight: 'auto',
            width: isMobile ? 'auto' : '100%',
            borderRadius: '10px',
            border: 'none',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            padding: '2rem',
          },
        }}
      >
        <BuySell coin={coinInfo}></BuySell>
      </ReactModal>
    </>
    
  )
}