import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Plot from "react-plotly.js";
import dayjs from "dayjs";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const [interval, setInterval] = useState({
    today: Math.floor(dayjs().unix()),
    year: Math.floor(dayjs().subtract(1, "year").unix()),
  });
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  useEffect(() => {
    const getStockData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
      );
      const data = await response.json();
      setStockData(data);
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
