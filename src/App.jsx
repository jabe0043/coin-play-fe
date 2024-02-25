import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth } from "./context/authContext";

function App() {
  const location = useLocation();
  const [authenticatedUserToken] = useAuth();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />}/>
      { authenticatedUserToken && 
        <Route path="/home" element={<Home />}/> 
      } 
    </Routes>
  )
}

export default App
