import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import { useAuth } from "./context/authContext";
/* GRAYS
#f0f0f0
#e0e0e0
#cccccc
#b0b0b0
#999999
#7f7f7f
#666666
#4d4d4d
#333333
#1a1a1a
*/
function App() {
  const location = useLocation();
  const [authenticatedUserToken] = useAuth();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />}/>
      { authenticatedUserToken && 
        <>
          <Route path="/home" element={<Home />}/> 
          <Route path='/explore' element= {<Explore />} />
        </>
      } 
    </Routes>
  )
}

export default App
