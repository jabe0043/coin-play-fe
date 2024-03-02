import { useUser } from '../../context/userContext';
import InvestmentsBreakdownChart from "../charts/InvestmentsBreakdownChart";
import { useCrypto } from '../../context/cryptoContext';
import * as Styled from '../../styled/components'

export default function Holdings(){
  const [getUserDoc, userDoc, setUserDoc, processUserTransaction, getHeldCoinsData] = useUser();
  const [cryptoData, getUpdatedCryptoData, selectedHolding, setSelectedHolding, getCoinMarketData, chartData, selectedCoin, setSelectedCoin] = useCrypto();

  const loadHoldings = () => {
    return userDoc.holdings.map((coin) => {
      return <HoldingLi key={coin._id} coin={coin} />;
    });
  };

  const HoldingLi = ({ coin }) => {
    return (
      <li key={coin.id} 
      style={{ display: 'flex', justifyContent: 'space-between', padding: '.5rem', alignItems: 'flex-start', borderBottom: '1px solid #D3DDE680' }}
      onClick={() => setSelectedHolding(coin)}
        >
        <p>{coin.coinSymbol}</p>
        <p>{coin.totalHeld}</p>
      </li>
    );
  };

  return (
    <div className='whiteShadow'>
      <h2>Your Holdings</h2>
      <Styled.PortfolioContainer>
        <InvestmentsBreakdownChart userDoc={userDoc}/>
        <div style={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ul style={{padding:0}}>
            {loadHoldings()}
          </ul>
        </div>
      </Styled.PortfolioContainer>
    </div>

  );
}

