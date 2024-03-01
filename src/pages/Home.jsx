import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext';
import Navbar from '../components/navbar/Navbar'; 
import Portfolio from '../components/homepage/Portfolio';
import Assets from '../components/homepage/Assets';
// import Holdings from '../components/homepage/Holdings';

export default function Home() {
  const [authenticatedUserToken] = useAuth();
  const [getUserDoc, userDoc] = useUser();

  useEffect(() => {
    if (authenticatedUserToken) {
      getUserDoc(authenticatedUserToken);
    }
  }, [authenticatedUserToken]);

  return (
    <>
    <Navbar />
      {userDoc && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Portfolio userDoc={userDoc} />
              <Assets userDoc={userDoc} style={{ flexGrow: 1 }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}