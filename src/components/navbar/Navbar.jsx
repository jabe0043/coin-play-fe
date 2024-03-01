import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import SearchBar from '../SearchBar';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Styled from '../../../styled/components';

export default function Navbar() {
  const navigate = useNavigate();
  const [, setAuthenticatedUserToken] = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const logOut = () => {
    sessionStorage.removeItem("UserToken");
    navigate("/");
    setAuthenticatedUserToken(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Styled.NavHeader>
        <Styled.Nav>
          <div className='nav-section'>
            <NavLink to='/' style={{ margin: 0 }}>
              CoinPlay
            </NavLink>
            <SearchBar />
          </div>

          {/* Hamburger button */}
          <button className='hamburger-btn' onClick={toggleDrawer}>
            ☰
          </button>

          {/*MOBLE DRAWER */}
          {drawerOpen && (
            <div className='drawer'>
              <ul>
                <li style={{width:'100%'}}>
                  <NavLink to='/home' onClick={() => { navigate('/'); setDrawerOpen(false); }}>
                    Home
                  </NavLink>
                </li>
                <li style={{width:'100%'}}>
                  <NavLink to='/explore' onClick={() => { navigate('/explore'); setDrawerOpen(false); }}>
                    Explore
                  </NavLink>
                </li>
                <li >
                  <NavLink to='/' onClick={() => { logOut(); setDrawerOpen(false); }}  >
                    Sign Out
                  </NavLink>
                </li>
              </ul>
            </div>
          )}

          {/* Navigation links for desktop */}
          <ul className='nav-sectionUl'>
            <NavLink to='/home' style={{ margin: 0 }}>
              Home
            </NavLink>
            <NavLink to='/explore' style={{ margin: 0 }}>
              Explore
            </NavLink>
            <NavLink to='/' onClick={() => logOut()} className='signOut-btn'>
              Sign Out
            </NavLink>
          </ul>
        </Styled.Nav>
      </Styled.NavHeader>
    </>
  );
}