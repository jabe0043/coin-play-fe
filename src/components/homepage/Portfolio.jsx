import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import PortfolioOverviewChart from '../charts/PortfolioOverviewChart';
import Holdings from './Holdings';
import * as Styled from '../../styled/components'

export default function Portfolio({userDoc}){
  const { balance, available, invested } = userDoc.portfolio;


  const buildPortfolioMetrics = (label, value) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '.5rem', alignItems: 'flex-start', borderBottom: '1px solid #D3DDE680' }}>
      <p>{label}</p>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }}>
        <p>{`$ ${value.toFixed(2).toLocaleString('en-US')}`}</p>
      </div>
    </div>
  )



  return(
    <>
      {userDoc &&
        <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <div className="whiteShadow">
            <h2>Here's a breakdown of your portfolio</h2>
            <Styled.PortfolioContainer>
              <PortfolioOverviewChart userDoc={userDoc}/>
              <div style={{ width: '100%', gap:10, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{ display: 'flex', justifyContent:'flex-end' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <MdOutlineArrowDropUp style={{ color: 'green' }} />
                    {/* <MdOutlineArrowDropDown style={{ color: 'red' }} /> */}
                  </div>
                  <p style={{fontWeight:'600'}}>0.00%</p>
                </div>
                {buildPortfolioMetrics('Balance', balance)}
                {buildPortfolioMetrics('Available', available)}
                {buildPortfolioMetrics('Invested', invested)}
              </div>
            </Styled.PortfolioContainer>
          </div>  
          {/* INVESTMENT BREAKDOWN DOUGHNUT CHART */}
          <Holdings/>
        </div>
      }
    </>
  )
}