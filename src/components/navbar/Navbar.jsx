import { useState } from 'react';
import { VscSearch,  } from "react-icons/vsc";


export default function Navbar(){
  const [textInput, setTextInput] = useState(''); //user input


  const handleSubmit = () =>{
    console.log('search');
  }

  return(
    <div style={{height:'5rem', display:'flex', justifyContent:'space-between', alignItems:'center', backgroundColor:'#f0f0f0'}}>

      {/* LOGO */}
      <p style={{margin:0}}> CoinPlay </p>

      {/* SEARCH BAR */}
      <div style={{ padding: '1rem', margin: 0, width: '20rem', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}} className="searchBar-container">
        <input type="text" placeholder="Search" style={{ paddingLeft:'1rem', width: '100%', height: '2.5rem', borderRadius: '5px', marginBottom: 0, backgroundColor: '#fff', border: 'none', borderBottomRightRadius: 0, borderTopRightRadius: 0, verticalAlign: 'top', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' ? handleSubmit() : null}
        />
        <button onClick={() => handleSubmit()} style={{ height: '2.5rem', width: '3rem', borderRadius: '5px', backgroundColor: '#242424', borderBottomLeftRadius: 0, borderTopLeftRadius: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', border: 0 }}>
          <VscSearch fontSize={19} color='white'/>
        </button>
      </div>

      {/* SIGN OUT BTN */}
      <button style={{color:'white', backgroundColor: '#242424', height: '2.5rem', width: '5rem', borderRadius: '5px', border: 0,}}>Sign Out</button>

    </div>
  )
}