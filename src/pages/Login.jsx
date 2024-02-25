import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useUser } from "../context/userContext";


export default function Login() {
  //////////////////URL/////////////////////
  //Local Server URL
  const baseURL = `http://localhost:3001`;

  //Client localhost URL
  const clientURL = `http://localhost:5173`;
  ////////////////////////////////////////////

  const navigate = useNavigate();
  const [params, _setParams] = useSearchParams();
  const [authenticatedUserToken, setAuthenticatedUserToken] = useUser();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      // console.log("set token to the sessionStorage", token);
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
    // console.log(url);
    location.href = url;
  }

  return (
    <div>
      <p>Welcome to Coin Play</p>
      <button onClick={initiateLogin}> login </button>
    </div>
  );
}
