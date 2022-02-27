import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

const CompanyOverview = ({ ...props }) => {
  const { ticker, apiKey } = props;
  const [companyData, setComapnyData] = useState([]);

  useEffect(() => {
    const getCompanyData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`
      );
      const data = await response.json();
      setComapnyData(data);
    };
    getCompanyData();
    return () => {};
  }, [ticker, apiKey]);

  return (
    <Box sx={{ width: "30rem", marginRight: "1rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography component="h1" variant="primary">
          {companyData.Name}
        </Typography>
        <Typography component="h2" variant="subtitle">
          Ticker: {ticker}
        </Typography>
      </Box>
      <Divider sx={{ paddingTop: 2, marginBottom: 1 }} />
      <Box>
        <Typography component="p" variant="subtitle">
          {companyData.Description}
        </Typography>
        <Divider sx={{ paddingTop: 2, marginBottom: 1 }} />
        <Typography component="h2" variant="primary">
          Sector Information
        </Typography>
        <Typography component="p" variant="subtitle">
          Exchange: {companyData.Exchange}
        </Typography>
        <Typography component="p" variant="subtitle">
          Currency: {companyData.Currency}
        </Typography>
        <Typography component="p" variant="subtitle">
          Country: {companyData.Country}
        </Typography>
        <Typography component="p" variant="subtitle">
          Sector: {companyData.Sector}
        </Typography>
        <Typography component="p" variant="subtitle">
          Industry: {companyData.Industry}
        </Typography>
      </Box>
      <Divider sx={{ paddingTop: 2, marginBottom: 1 }} />
    </Box>
  );
};

export default CompanyOverview;
