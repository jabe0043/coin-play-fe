import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext';
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

  console.log(userDoc);

  return (
    <>
      {userDoc && (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', backgroundColor: '#f5f5f5' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Portfolio userDoc={userDoc} />
              <Assets userDoc={userDoc} style={{ flexGrow: 1 }} />
            </div>
            {/* <Holdings /> */}
          </div>
        </div>
      )}
    </>
  );
}