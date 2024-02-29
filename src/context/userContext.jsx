import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";

const UserContext = createContext();

function UserProvider(props) {
  const [authenticatedUserToken] = useAuth();
  const [userDoc, setUserDoc] = useState(); //-- Holds the user document

  useEffect(() => {
    if (authenticatedUserToken) {
      getUserDoc();
    }
  }, []); //authenticatedUserToken inside of dep. array was causing double user creating request and error through mongo


  // Create || Retrieve User document in MongoDB (first mongo client request);
  const getUserDoc = () => {
    console.log("GET USER DOC CALLED FROM CONTEXT");
    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authenticatedUserToken}`,
      },
    })
    .then((response) => response.json())
    .then((data) => setUserDoc(data))
    .catch((error) => {
      console.error('Error creating/retrieving user document:', error);
    });
  };

  //-- Process a user transaction | Type: BUY, SELL | Info: {coindId, coinName, coinSymbol, qty, price, date}
  const processUserTransaction = (transactionType, transactionInfo) => {
    const requestBody = {
      userId: userDoc._id,
      transactionInfo: transactionInfo
    }
    fetch('http://localhost:3001/user/actions/buy', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authenticatedUserToken}`,
      },
      body: JSON.stringify(requestBody),
    })
    .then((response) => response.json())
    .then((response)=> setUserDoc(response.data))
    .catch((error) => console.error('Error:', error));
  }



  return <UserContext.Provider value={[getUserDoc, userDoc, setUserDoc, processUserTransaction]} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("Not inside the Provider - no user is signed in");
  return context;
}

export { useUser, UserProvider };