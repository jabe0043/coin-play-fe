import { useEffect } from 'react';
import { useUser } from '../context/userContext';


export default function Home(){
  const [authenticatedUserToken] = useUser();
  console.log('user successfully logged in');

  //-- Create || Retrieve User document in MongoDB
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
        .then(data => {
          console.log('User document:', data);
        })
        .catch(error => {
          console.error('Error creating/retrieving user document:', error);
        });
    }
  }, [authenticatedUserToken]);



  return(
    <div>
      <p>Home Page</p>
    </div>
  )
}