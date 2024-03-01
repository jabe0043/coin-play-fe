import styled from 'styled-components';

/***********************************************
-- NavBar Component
***********************************************/
const NavHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.silverWhite};
  position: sticky;
  top: 0;
  z-index: 10;
`

const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  padding: 1rem;
`

const SearchBar = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`




export{NavHeader, Nav, SearchBar };