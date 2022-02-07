import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Chart from "./Chart";
import CompanyOverview from "./CompanyOverview";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  const [stockData, setStockData] = useState([]);
  const [volumeData, setVolumeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatStockData = (stockData) => {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        time: date.toString(),
        open: Number(priceData["1. open"]),
        high: Number(priceData["2. high"]),
        low: Number(priceData["3. low"]),
        close: Number(priceData["4. close"]),
      };
    });
  };

  const formatVolumeData = (stockData) => {
    return Object.entries(stockData).map((entries) => {
      const [date, priceData] = entries;

      return {
        time: date.toString(),
        value: Number(priceData["5. volume"]),
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
      const formatedVolumeData = formatVolumeData(data["Time Series (Daily)"]);
      setStockData(formatedData.reverse());
      setVolumeData(formatedVolumeData.reverse());
      setLoading(false);
    };
    getStockData();
  }, [ticker]);

  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="center"
      paddingX={3}
    >
      <Typography component="h1" variant="primary">
        Stock : {ticker}
      </Typography>
      <Chart
        item
        ticker={ticker}
        stockData={stockData}
        volumeData={volumeData}
        apiKey={apiKey}
        loading={loading}
      />
      <CompanyOverview item ticker={ticker} apiKey={apiKey} />
    </Grid>
  );
};

export default Stock;
