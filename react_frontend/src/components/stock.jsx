import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  const formatStockData = (stockData) => {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        date,
        volume: Number(priceData["5. volume"]),
        open: Number(priceData["1. open"]),
        high: Number(priceData["2. high"]),
        low: Number(priceData["3. low"]),
        close: Number(priceData["4. close"]),
      };
    });
  };

  useEffect(() => {
    const getStockData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&datatype=json&apikey=${apiKey}`
      );
      const data = await response.json();
      const formatedData = formatStockData(data["Time Series (Daily)"]);
      setStockData(formatedData);
      setLoading(false);
    };
    getStockData();
  }, [ticker]);

  console.log(stockData);

  return (
    <div>
      <h1>Stock : {ticker}</h1>
      <p>Price {stockData.c}</p>
      <p>Precentage Change: {stockData.dp}</p>
    </div>
  );
};

export default Stock;
