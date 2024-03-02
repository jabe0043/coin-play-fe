import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import PortfolioOverviewChart from '../charts/PortfolioOverviewChart';
import Holdings from './Holdings';
import * as Styled from '../../styled/components'

export default function Portfolio({userDoc}){
  const { balance, available, invested } = userDoc.portfolio;


  return(
    <>
      {userDoc &&
        <div>
          <h2>Welcome, {userDoc.name.split(" ")[0]}</h2>
          <h3>Here's a breakdown of your portfolio.</h3>

          <Styled.PortfolioContainer>
            {/* PORTFOLIO OVERVIEW DOUGHNUT CHART */}
            <PortfolioOverviewChart userDoc={userDoc}/>
            <div style={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* TOTAL BALANCE */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:'flex-start', borderBottom: '.1rem solid #b0b0b0' }}>
                <p>Total Balance</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }}>
                  {/* TODO: Conditionally render the arrows and % only if not 0% */}
                  <div style={{ display: 'flex' }}>
                    <p>0.00%</p>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <MdOutlineArrowDropUp style={{ color: 'green' }} />
                      {/* <MdOutlineArrowDropDown style={{ color: 'red' }} /> */}
                    </div>
                  </div>
                  <p>{`$ ${balance.toLocaleString('en-US')}`}</p>
                </div>
              </div>
              {/* AVAILABLE BALANCE */}
              <div style={{ display:'flex', justifyContent:'space-between', borderBottom: '.1rem solid #b0b0b0'}}>
                <p>Available</p>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
                  <p>{`$ ${available.toFixed(2).toLocaleString('en-Us')}`}</p>
                </div>
              </div>
              {/* INVESTED BALANCE */}
              <div style={{ display:'flex', justifyContent:'space-between', borderBottom: '.1rem solid #b0b0b0'}}>
                <p>Invested</p>
                <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
                  <p>{`$ ${invested.toFixed(2).toLocaleString('en-Us')}`}</p>
                </div>
              </div>
            </div>
          </Styled.PortfolioContainer>

          {/* INVESTMENT BREAKDOWN DOUGHNUT CHART */}
          <Holdings/>
        </div>
      }
    </>
  )
}