import { useUser } from '../context/userContext';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function BuySell({ coin }) {
  const [getUserDoc, userDoc, setUserDoc, processUserTransaction] = useUser();
  const [qtyInput, setQtyInput] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  console.log('USER DOC: ', userDoc);
  console.log('coin: ', coin);

  // Set the input placeholder text based on qtyInput
  useEffect(() => {
    setPlaceholder(qtyInput === '' ? '0.00' : '');
  }, [qtyInput]);


  //-- triggered when user enters a QUANTITY of coins to purchase
  useEffect(() => {
    getTotalCost();
  }, [qtyInput]);


  //-- Get Total Cost based on coin quantity;
  const getTotalCost = () => {
    if (!isNaN(qtyInput) && qtyInput > 0) {
      let total = coin.price * qtyInput;
      setTotal(total);
    } else {
      setTotal(0);
    }
  };

  //-- Get total purchaseable QTY based on available portfolio balance;
  const getTotalPurchaseableQty = () => {
    let totalAmt = userDoc.portfolio.available / coin.price;
    totalAmt = Math.floor(totalAmt * 100) / 100;
    console.log(totalAmt);
    return totalAmt.toLocaleString('en-Us')
  }

  //-- Initiate user transaction
  const initiateTransaction = async (transactionType) => {
    console.log('initiating transaction', transactionType);
    const transactionInfo = {
      coinId: coin.symbol,
      coinName: coin.name,
      coinSymbol: coin.symbol,
      qty: qtyInput,
      price: total,
      date: new Date(),
      transactionId: crypto.randomUUID()
    }
    await processUserTransaction(transactionType,transactionInfo);
    navigate("/home");
  }

  return (
    <>
      {userDoc && (
        <div style={{ flexGrow: 1, height: '100%', backgroundColor: '#e0e0e0', padding: 10, borderRadius: 10 }}>
          <div style={{borderBottom: '1px solid #cccccc'}}>
            <h1>{`Buy ${coin.name}`}</h1>
            <p style={{ display: 'flex', justifyContent: 'space-between', }}>
              Available Balance:
              <span>{`$${userDoc.portfolio.available.toLocaleString('en-Us')} USD`}</span>
            </p>
            <p style={{ display: 'flex', justifyContent: 'space-between',  }}>
              Purchaseable Quantity: <span>{`${getTotalPurchaseableQty()} ${coin.symbol}`}</span> </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 30 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Quantity</p>
              <input
                id="qty"
                type="number"
                placeholder={placeholder}
                style={{ textAlign: 'center',height: '2.5rem',borderRadius: 5,marginBottom: 0,backgroundColor: '#fff',border: 'none',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',}}
                value={qtyInput !== null ? qtyInput.toString() : ''}
                onChange={(e) => setQtyInput(e.target.value)}
                onFocus={() => setPlaceholder('')}
                />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>Total (USD)</p>
              <p style={{textAlign:'center'}}>$ {total !== null ? total.toFixed(2).toLocaleString('en-Us').toString() : ''}</p>
            </div>

            <button 
              style={{ color: 'white', backgroundColor: '#242424', height: '2.5rem', width: '100%', borderRadius: '5px', border: 0 }}
              onClick = {() => initiateTransaction('buy')}
            >
              {`Buy ${coin.symbol}`}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

