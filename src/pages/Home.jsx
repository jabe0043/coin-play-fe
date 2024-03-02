import { useEffect } from 'react';
import { useAuth } from '../context/authContext';
import { useUser } from '../context/userContext';
import Navbar from '../components/navbar/Navbar'; 
import Portfolio from '../components/homepage/Portfolio';
import Assets from '../components/homepage/Assets';
import * as Styled from '../styled/components';

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
          <Styled.HomePageContainer className='container' >
            <Portfolio userDoc={userDoc} />
            <Assets userDoc={userDoc} />
          </Styled.HomePageContainer>
      )}
    </>
  );
}