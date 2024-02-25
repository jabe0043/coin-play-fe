import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
)
