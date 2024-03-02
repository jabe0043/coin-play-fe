import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/authContext.jsx';
import Theme from './theme/Theme.jsx';
import { GlobalStyle } from './styled/globalStyles.jsx';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Theme>
        <GlobalStyle/>
        <App />
      </Theme>
    </BrowserRouter>
  </AuthProvider>
)
