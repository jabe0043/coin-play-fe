import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";


const UserContext = createContext();

function UserProvider(props) {
  const [authenticatedUserToken] = useAuth();
  const [userDoc, setUserDoc] = useState(); //-- Holds the user document

  useEffect(() => {
    if (authenticatedUserToken) {
      getUserDoc(authenticatedUserToken);
    }
  }, [authenticatedUserToken]);


  // Create || Retrieve User document in MongoDB (first mongo client request);
  const getUserDoc = (token) => {
    console.log("GET USER DOC CALLED FROM CONTEXT");
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserDoc(data))
      .catch((error) => {
        console.error('Error creating/retrieving user document:', error);
      });
  };



  return <UserContext.Provider value={[getUserDoc, userDoc, setUserDoc]} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("Not inside the Provider - no user is signed in");
  return context;
}

export { useUser, UserProvider };