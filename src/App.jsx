import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { useUser } from "./context/userContext";

function App() {
  const location = useLocation();
  const [authenticatedUserToken] = useUser(); // Destructure the token directly from the context

  return (
    <Routes location={location} key={location.pathname}>
      { !authenticatedUserToken &&
        <Route path="/login" element={<Login />}/>
      }
      { authenticatedUserToken && 
        <Route path="/home" element={<Home />}/> 
      } 
    </Routes>
  )
}

export default App
