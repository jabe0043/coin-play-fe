import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import PortfolioOverviewChart from '../charts/PortfolioOverviewChart';
import InvestmentsBreakdownChart from "../charts/InvestmentsBreakdownChart";

export default function Portfolio({userDoc}){
  const { balance, available, invested } = userDoc.portfolio;


  return(
    <>
      {userDoc &&
        <div style={{width:'40%', height:"auto",backgroundColor:'#e0e0e0'}}>

          <h2>Welcome, {userDoc.name.split(" ")[0]}</h2>
          
          <div style={{display:'flex', justifyContent:'space-between', gap:10}}>
            {/* PORTFOLIO OVERVIEW DOUGHNUT CHART */}
            <PortfolioOverviewChart userDoc={userDoc}/>
            <div style={{flexGrow:1}}>
              {/* TOTAL BALANCE */}
              <div style={{ backgroundColor: '#cccccc', display: 'flex', justifyContent: 'space-between', alignItems:'flex-start', borderBottom: '.1rem solid #b0b0b0' }}>
                <p>Total Balance</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }}>
                  {/* TODO: Conditionally render the arrows and % only if not 0% */}
                  <div style={{ display: 'flex' }}>
                    <p>0.00%</p>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <MdOutlineArrowDropUp style={{ color: 'green' }} />
                      <MdOutlineArrowDropDown style={{ color: 'red' }} />
                    </div>
                  </div>
                  <p>{`$ ${balance.toLocaleString('en-US')}`}</p>
                </div>
              </div>
              {/* AVAILABLE BALANCE */}
              <div style={{ backgroundColor:'#cccccc', display:'flex', justifyContent:'space-between', borderBottom: '.1rem solid #b0b0b0'}}>
                <p>Available</p>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
                  <p>{`$ ${available.toFixed(2).toLocaleString('en-Us')}`}</p>
                </div>
              </div>
              {/* INVESTED BALANCE */}
              <div style={{ backgroundColor:'#cccccc', display:'flex', justifyContent:'space-between', borderBottom: '.1rem solid #b0b0b0'}}>
                <p>Invested</p>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
                  <p>{`$ ${invested.toFixed(2).toLocaleString('en-Us')}`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* INVESTMENT BREAKDOWN DOUGHNUT CHART */}
          <div style={{display:'flex', gap: 20, paddingTop:20, justifyContent:'flex-start'}}>
            <InvestmentsBreakdownChart userDoc={userDoc}></InvestmentsBreakdownChart>
          </div>
        </div>
      }
    </>
  )
}