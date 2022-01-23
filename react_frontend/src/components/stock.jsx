import { useState, useEffect } from "react";

const Stock = () => {
  const [stock, setStock] = useState("AAPL");
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  useEffect(() => {
    const getStockData = async () => {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${stock}&token=${apiKey}`
      );
      const data = await response.json();
      setStockData(data);
      setLoading(false);
    };
    getStockData();
  }, [stock]);

  return (
    <div>
      <h1>Stock : {stock}</h1>
      <p>Price {stockData.c}</p>
      <p>Precentage Change: {stockData.dp}</p>
    </div>
  );
};

export default Stock;
