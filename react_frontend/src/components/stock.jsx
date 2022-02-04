import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  useEffect(() => {
    const getStockData = async () => {
      const response = await fetch(
        `https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${apiKey}`
      );
      const data = await response.json();
      setStockData(data);
      setLoading(false);
    };
    getStockData();
  }, [ticker]);

  return (
    <div>
      <h1>Stock : {ticker}</h1>
      <p>Price {stockData.c}</p>
      <p>Precentage Change: {stockData.dp}</p>
    </div>
  );
};

export default Stock;
