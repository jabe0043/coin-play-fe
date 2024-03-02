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

const HomePageContainer = styled.div`
  height: auto;
  display: flex; 
  flex-direction: column; 
  gap: 1rem;

  //--Desktop
  @media screen and (min-width: 950px) {
    display: flex; 
    flex-direction: row;
    justify-content:space-between;
    // align-items:center;
  }
`


const PortfolioContainer = styled.div`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  //--Desktop
  @media screen and (min-width: 950px) {
    display: flex; 
    flex-direction: row;
    justify-content:space-between;
    flex-grow:1;
    width:40vw;
  }
`

const DoughnutChartContainer = styled.div`
  align-self: center;
  max-width:15rem;

  //--Desktop
  @media screen and (min-width: 950px) {
    max-width:12rem;
  }
`




export{NavHeader, Nav, SearchBar, HomePageContainer, PortfolioContainer, DoughnutChartContainer };