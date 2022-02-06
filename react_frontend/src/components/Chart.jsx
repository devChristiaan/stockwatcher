import { useState, useEffect } from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

const Chart = ({ ...props }) => {
  const { ticker, apiKey } = props;
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <CanvasJSChart
      options={{
        data: [
          {
            type: "candlestick",
            dataPoinst: stockData.map((stockData) => ({
              x: new Date(stockData.data),
              y: [
                stockData.open,
                stockData.close,
                stockData.high,
                stockData.low,
              ],
            })),
          },
        ],
      }}
    />
  );
};

export default Chart;
