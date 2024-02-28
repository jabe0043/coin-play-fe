


  //-- Get the timeframe for a coin's historical market data (1h, 24h, 7d, 1m, 3m, 6m, 1y, all) - Used in coin details page;
  export const getTimeRange = (timeframe) => {
    const currentDate = new Date();
    const period = {};
    switch (timeframe) {
      case '1h':
        period.startDate = currentDate.getTime() - 1 * 60 * 60 * 1000; // 1 hour ago
        period.endDate = currentDate.getTime();
        break;
      case '24h':
        period.startDate = currentDate.getTime() - 24 * 60 * 60 * 1000; // 24 hours ago
        period.endDate = currentDate.getTime();
        break;
      case '7d':
        period.startDate = currentDate.getTime() - 7 * 24 * 60 * 60 * 1000; // 7 days ago
        period.endDate = currentDate.getTime();
        break;
      case '1m':
        period.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()).getTime();
        period.endDate = currentDate.getTime();
        break;
      case '3m':
        period.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate()).getTime();
        period.endDate = currentDate.getTime();
        break;
      case '6m':
        period.startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate()).getTime();
        period.endDate = currentDate.getTime();
        break;
      case '1y':
        period.startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate()).getTime();
        period.endDate = currentDate.getTime();
        break;
      default:
        period.startDate = new Date(0).getTime(); // Full historical market time range
        period.endDate = currentDate.getTime();
    }
    return period;
  };



  // function getDates(){
  // //turn in to switch statement that returns the date formatted based on the requested timerange (ex: 24h, 1d, 1w etc.);
  //   console.log(chartData);
  //   if(chartData){
  //     chartData.price_history.forEach((datapoint) => {
  //       const date = new Date(datapoint[0])
  //       const year = date.getFullYear();
  //       const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  //       const day = date.getDate();
  //       const hours = date.getHours();
  //       const minutes = date.getMinutes();
  //       const seconds = date.getSeconds();
  //       const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  //       console.log(formattedDate);
  //     });
  //   }
  // }