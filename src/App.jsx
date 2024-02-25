import { Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
