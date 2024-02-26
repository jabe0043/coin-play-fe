import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { UserProvider } from "./context/userContext";
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CoinDetails from "./pages/CoinDetails";
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
    <UserProvider>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />}/>
        { authenticatedUserToken && 
          <>
            <Route path="/home" element={<Home />}/> 
            <Route path='/explore' element= {<Explore />} />
            <Route path='/coin/:coinSymbol' element= {<CoinDetails />} />
          </>
        } 
      </Routes>
    </UserProvider>
  )
}

export default App
