
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export default function Portfolio({userDoc}){
  const {balance, available,invested} = userDoc.portfolio;


  return(
    userDoc &&
    <div style={{width:'40%', height:"25rem",backgroundColor:'#e0e0e0'}}>

      <h2>Portfolio</h2>

      {/* TOTAL BALANCE*/}
      <div style={{ backgroundColor: '#cccccc', display: 'flex', justifyContent: 'space-between', borderBottom: '.1rem solid #b0b0b0' }}>
        <p>Total Balance</p>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10,}}>
          {/* TODO: Conditionally render the arrows and % only if not 0% */}
          <div style={{display:'flex'}}>
            <p>0.00%</p>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <MdOutlineArrowDropUp style={{color:'green'}}/>
              <MdOutlineArrowDropDown style={{color:'red'}}/>
            </div>
          </div>
          <p>{balance}</p>
        </div>
      </div>

      {/* AVAILABLE BALANCE*/}
      <div style={{ backgroundColor:'#cccccc', display:'flex', justifyContent:'space-between', borderBottom: '.1rem solid #b0b0b0'}}>
        <p>Available</p>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
          <p>{available}</p>
        </div>
      </div>

      {/* INVESTED BALANCE*/}
      <div style={{ backgroundColor:'#cccccc', display:'flex', justifyContent:'space-between', borderBottom: '.1rem solid #b0b0b0'}}>
        <p>Invested</p>
        <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
          <p>{invested}</p>
        </div>
      </div>

    </div>
  )
}