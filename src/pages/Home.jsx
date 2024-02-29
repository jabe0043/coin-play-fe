import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext';
import Portfolio from '../components/homepage/Portfolio';
import Assets from '../components/homepage/Assets';


export default function Home() {
  const [authenticatedUserToken] = useAuth();
  const [getUserDoc, userDoc] = useUser();

  useEffect(() => {
    if (authenticatedUserToken) {
      getUserDoc(authenticatedUserToken);
    }
  }, [authenticatedUserToken]);

  console.log(userDoc);

  return (
    <>
      {userDoc && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', backgroundColor: '#f5f5f5' }}>
            <Portfolio userDoc={userDoc} />
            <Assets userDoc={userDoc} />
          </div>
        </div>
      )}
    </>
  );
}