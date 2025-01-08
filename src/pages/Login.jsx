import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/authContext";
import loginImage from '../assets/loginImage.png';

export default function Login() {
  //////////////////URL/////////////////////
  //Local Node.js Server URL
  const baseURL = `http://localhost:3001`;

  //Client localhost URL
  const clientURL = `http://localhost:5173`;
  ////////////////////////////////////////////

  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [authenticatedUserToken, setAuthenticatedUserToken] = useAuth();

  useEffect(() => {
    const token = params.get("token");
    console.log('PARAMS:', params);
    if (token) {
      setAuthenticatedUserToken(token);
      navigate("/home");
    } else {
      if (authenticatedUserToken) {
        navigate("/home");
      }
    }
  }, []);


  //-- Initiate Google OAuth flow
  function initiateLogin() {
    let url = baseURL + `/auth/google?redirect_url=${clientURL}`;
    location.href = url;
  }

  return (
    // <div>
    //   <p>Welcome to Coin Play</p>
    //   <button onClick={initiateLogin}> login </button>

    // </div>

    <div className="login--container">
      <h1>Welcome to Coin Play</h1>
      <img className="login--image" src={loginImage} alt="Coin Play logo"/>
      <button className= "login--btn" onClick={initiateLogin}>Sign In</button>
    </div>
  );
}
