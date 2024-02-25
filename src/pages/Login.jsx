import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/authContext";


export default function Login() {
  //////////////////URL/////////////////////
  //Local Node.js Server URL
  const baseURL = `http://localhost:3001`;

  //Client localhost URL
  const clientURL = `http://localhost:5173`;
  ////////////////////////////////////////////

  const navigate = useNavigate();
  const [params, _setParams] = useSearchParams();
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

  function initiateLogin() {
    console.log('initiating log in')
    let url = baseURL + `/auth/google?redirect_url=${clientURL}`;
    location.href = url;
  }

  return (
    <div>
      <p>Welcome to Coin Play</p>
      <button onClick={initiateLogin}> login </button>
    </div>
  );
}
