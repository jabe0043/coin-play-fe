import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
)
