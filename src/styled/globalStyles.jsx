import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
:root {
    font-family: ${({theme}) => theme.fonts[0]};
    line-height: 1.5;
    font-weight: ${({theme}) => theme.fontWeights.regular};

    color:${({ theme }) => theme.colors.charcoal};
    background-color: ${({ theme }) => theme.colors.silverWhite};

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}

/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Set core root defaults */
html {
    line-height: 1.5;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

html:focus-within {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    margin: 0;

    overflow-x: hidden;
}

/* Update default margin */
h1,
h2,
h3,
h4,
h5,
h6,
figure,
blockquote,
ul,
ol,
dl,
dd {
    margin: 0 0 1rem;
}

p{
    margin:0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'],
li {
    list-style: none;
}

ul{
  margin:0;
}


/* A elements that don't have a class get default styles */
a {
    text-decoration-skip-ink: auto;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.charcoal};
    transition: color 0.2s;
}

a:hover,
a:focus-visible {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkCharcoal};
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

svg {
    fill: currentColor;
}

svg:not(:root) {
    overflow: hidden;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        /* animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important; */
        scroll-behavior: auto !important;
    }
}

::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.black};
}
::-webkit-scrollbar-thumb {
    background-color:  #555; 
    border-radius: 10rem;
}
::-webkit-scrollbar-thumb:hover {
    background-color:${({ theme }) => theme.colors.whiteFade};
}

.container{                           
  width: min(100em, 100%);
  margin: 0 auto;
  padding:1.5rem;
}




/************** NAVBAR SECTION **************/
.nav-section, .nav-sectionUl {
  display: flex;
  align-items: center;
  padding:1rem;
  gap: 15px;
}

.input-field {
  padding-left: 1rem;
  max-width: 100%;
  height: 2.5rem;
  border-radius: 5px;
  margin-bottom: 0;
  background-color: #fff;
  border: none;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  vertical-align: top;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.search-btn {
  height: 2.5rem;
  width: 3rem;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  border: 0;
  display: flex;
  align-items: center; 
  justify-content: center; 
}

.signOut-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  height: 2.5rem;
  width: 5rem;
  border-radius: 5px;
  border: 0;
  text-align: center;
}



.drawer {
  display: none;
  position: fixed;
  top: 5rem;
  right: 0;
  width: 70%; 
  max-width: 300px; 
  background-color: ${({ theme }) => theme.colors.silverWhite};
  z-index: 10; 
  transition: transform 0.3s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 16px; /* Increased the box-shadow values */
}

//-------- MOBILE
@media screen and (max-width: 768px) {
  .nav-sectionUl {
    display: none; 
  }

  .hamburger-btn {
    // display: inline-block;
    display:flex;
    align-items:center;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    color: ${({ theme }) => theme.colors.midnightBlue};
    font-size: 2rem;
  }

  .drawer {
    display: block;
    background-color: ${({ theme }) => theme.colors.white};
    height:100%;
    transform: translateX(0);
  }

  .drawer ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  .drawer a {
    display: block;
    padding: 1rem;
    text-decoration: none;
    color:  ${({ theme }) => theme.colors.charcoal};
  }

  .drawer.closed {
    transform: translateX(100%);
  }
}


//-------- DESKTOP
@media screen and (min-width: 769px) {
  .hamburger-btn {
    display: none;
  }

  .drawer {
    display: none;
  }
}

/************** END NAVBAR SECTION **************/




/**************************************************/
/************** HOME SECTION **************/
/**************************************************/
.whiteShadow{
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${({ theme }) => theme.colors.white};
  padding:1rem;
  border-radius: .5rem;
  margin-bottom: 2rem;
}

.whiteShadow h2{
  font-weight:${({ theme }) => theme.fontWeights.regular}
}


//*****-- ASSETS SECTION

//              --> CoinInfoTop() Component <--
.timePeriod__btn--container {
  flex-grow:1;
  display: grid;
  grid-template-columns: repeat(4, .5fr); //4 btns per row on mobile
  direction: rtl; //new rows start from right side
  text-align: left; 
  gap: 0, .25rem
  align-content: end; // align the content at the bottom
  align-items: end; // align individual items at the bottom
}


.timePeriod__btn{
  width:auto; 
  max-height:1.5rem;
  border:none;
  border-radius:1rem;
  text-align: center;
  margin: 2px;
  margin-top: 1px;
}



//--> CoinInfoBot() Component 

.coinInfo__cards--container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:.5rem;
  padding-top:1rem;
}

.coinInfo__card{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  background-color:${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.charcoal};
}

.coinInfo__card--title {
  color: #9BA4B4;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
}



//--DESKTOP ASSETS SECTION ( MEDIA QUERY )
@media screen and (min-width: 600px) {
  .timePeriod__btn--container {
    grid-template-columns: repeat(auto-fill, minmax(2rem, 1fr));
    gap: 1rem
  }

  .timePeriod__btn{
    width:3rem; 
    height:2rem;
    border:none;
    border-radius:1rem;
    margin-bottom: 6px;
  }


  //-- Bottom chart section
  .coinInfo__cards--container {
    grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr)); /* Adjust the minmax values as needed for desktop */
  }

  .coinInfo__card{
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

}

/************** END HOME SECTION **************/



  /**************************************************/
  /************** EXPLORE SECTION **************/
  /**************************************************/

//-- INFINITE CAROUSEL slider section (MostTrader())
  @keyframes slide {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  
  .carousel-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow: hidden;
  }
  
  .carousel-card {
    background-color: ${({ theme }) => theme.colors.white};
    min-width: 10rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
  
  .carousel-track {
    display: flex;
    left: 0;
    justify-content: flex-start;
    align-items: center;
    gap: .5rem;
    width: 100%; 
    height: 100%;
    animation: slide 40s linear infinite;
  }
  
  //--DESKTOP CAROUSEL SECTION ( MEDIA QUERY )
  @media (min-width: 767px) {
    .carousel-track {
      gap: 1rem;
    }
  }







`;