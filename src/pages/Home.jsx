import { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import Portfolio from '../components/homepage/Portfolio';
import Assets from '../components/homepage/Assets';


export default function Home(){
  const [authenticatedUserToken] = useAuth();
  const [userDoc, setUserDoc] = useState();

  //-- Create || Retrieve User document in MongoDB (first mongo client request);
  useEffect(() => {
    if (authenticatedUserToken) {
      fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authenticatedUserToken}`,
        },
      })
      .then(response => response.json())
      .then(data => setUserDoc(data))
      .catch(error => {
        console.error('Error creating/retrieving user document:', error);
      });
    }
  }, [authenticatedUserToken]);

  return (
    <>
      {userDoc && (
        <div >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', backgroundColor: '#f5f5f5' }}>
            <Portfolio userDoc={userDoc}></Portfolio>
            <Assets userDoc={userDoc}></Assets>
          </div>
        </div>
      )}
    </>
  );
}