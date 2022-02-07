import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Chart from "./Chart";
import CompanyOverview from "./CompanyOverview";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Stock = () => {
  const ticker = useSelector((state) => state.stockReducer.ticker);
  const apiKey = process.env.REACT_APP_ALPHA_API_KEY;

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      paddingX={3}
      paddingY={3}
    >
      <Typography component="h1" variant="primary">
        Stock : {ticker}
      </Typography>
      <Chart item ticker={ticker} apiKey={apiKey} />
      <CompanyOverview item ticker={ticker} apiKey={apiKey} />
    </Grid>
  );
};

export default Stock;
