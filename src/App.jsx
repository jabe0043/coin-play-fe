import { Routes, Route, useLocation } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { UserProvider } from "./context/userContext";
import { CryptoProvider } from "./context/cryptoContext";
import Login from './pages/Login';
import Home from './pages/Home';
import Explore from './pages/Explore';
import CoinDetails from "./pages/CoinDetails";

function App() {
  const location = useLocation();
  const [authenticatedUserToken] = useAuth();

  return (
    <UserProvider>
      <CryptoProvider>
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
      </CryptoProvider>
    </UserProvider>
  )
}

export default App
