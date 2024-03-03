import React from "react";


export default function MostTraded({ trendingCoins }) {
  console.log(trendingCoins);

  const CarouselItem = ({ name, price }) => {
    console.log(name, price);
    return (
      <div className="carousel-card">
        <p>{name}</p>
        <p>$ {price.toFixed(2).toLocaleString('en-Us')}</p>
      </div>
    );
  };

  return (
    trendingCoins && (
      <div className="carousel-container">
        <div className="carousel-track">
            {Object.keys(trendingCoins).map((coinSymbol, index)  => {
              return (
                <CarouselItem
                  key={index}
                  name={trendingCoins[coinSymbol].name}
                  price={trendingCoins[coinSymbol].price}
                />
              );
          })}
          {Object.keys(trendingCoins).map((coinSymbol, index)  => {
            return (
              <CarouselItem
                key={index}
                name={trendingCoins[coinSymbol].name}
                price={trendingCoins[coinSymbol].price}
              />
            );
          })}
        </div>
      </div>
    )
  );
}
