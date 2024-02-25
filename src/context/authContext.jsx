import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [authenticatedUserToken, setAuthenticatedUserToken] = useState(() => {
    return JSON.parse(sessionStorage.getItem("UserToken"));
  });

  //-- Set authentication token in session storage
  useEffect(() => {
    sessionStorage.setItem("UserToken", JSON.stringify(authenticatedUserToken));
  }, [authenticatedUserToken]);

  return <AuthContext.Provider value={[authenticatedUserToken, setAuthenticatedUserToken]} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Not inside the Provider - no user is signed in");
  return context;
}

export { useAuth, AuthProvider };
