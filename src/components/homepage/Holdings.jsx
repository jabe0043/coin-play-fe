
import { useUser } from '../../context/userContext';
import InvestmentsBreakdownChart from "../charts/InvestmentsBreakdownChart";

export default function Holdings(){
  const [getUserDoc, userDoc] = useUser();

  const loadHoldings = () => {
    return userDoc.holdings.map((coin) => {
      return <HoldingLi key={coin._id} coin={coin} />;
    });
  };

  const HoldingLi = ({ coin }) => {
    return (
      <li key={coin.id} style={{ backgroundColor: '#cccccc', width:'100%', display: 'flex', justifyContent: 'space-between', alignItems:'flex-start', borderBottom: '.1rem solid #b0b0b0' }}>
        <p>{coin.coin}</p>
        <p>{coin.totalHeld}</p>
      </li>
    );
  };

  return (
    <>
      <h3 style={{marginBottom:0}}>Your Holdings</h3>
      <div style={{display:'flex', gap: 10, justifyContent:'flex-start', alignItems:'center'}}>
        <InvestmentsBreakdownChart userDoc={userDoc}></InvestmentsBreakdownChart>
        <div style={{ width: '100%', backgroundColor: '#e0e0e0' }}>
          <ul style={{padding:0, width:'100%'}}>
            {loadHoldings()}
          </ul>
        </div>
      </div>
  </>

  );
}

