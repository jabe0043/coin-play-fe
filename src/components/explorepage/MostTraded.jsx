import React from "react";


export default function MostTraded({ trendingCoins }) {
  console.log(trendingCoins);

  const CarouselItem = ({ name, price, logo, volumeChange }) => {
    console.log(name, price);
    return (
      <div className="carousel-card">
        <span style={{display:'flex', gap:'.25rem'}}>
          <img src={logo} style={{ width: '20px', height: '20px', borderRadius: 20 }}></img>
          <strong>{name}</strong>
        </span>
        <p>$ {price.toFixed(2).toLocaleString('en-Us')}</p>
      </div>
    );
  };

  return (
    trendingCoins && (
      <div className="carousel-container">
        <div className="container" style={{paddingBottom:0}}>
          <h2 > Most Traded </h2>
        </div>
        <div className="carousel-track">
            {Object.keys(trendingCoins).map((coinSymbol, index)  => {
              return (
                <CarouselItem
                  key={index}
                  name={trendingCoins[coinSymbol].name}
                  price={trendingCoins[coinSymbol].price}
                  logo={trendingCoins[coinSymbol].logo}
                  volumeChange={trendingCoins[coinSymbol].volume_change_24h}
                />
              );
          })}
          {Object.keys(trendingCoins).map((coinSymbol, index)  => {
            return (
              <CarouselItem
                key={index}
                name={trendingCoins[coinSymbol].name}
                price={trendingCoins[coinSymbol].price}
                logo={trendingCoins[coinSymbol].logo}
              />
            );
          })}
        </div>
      </div>
    )
  );
}
