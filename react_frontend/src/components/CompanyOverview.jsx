import { useState, useEffect } from "react";

import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const CompanyOverview = ({ ...props }) => {
  const { ticker, apiKey } = props;
  const [companyData, setComapnyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCompanyData = async () => {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`
      );
      const data = await response.json();
      setComapnyData(data);
      setLoading(false);
    };
    getCompanyData();
  }, [ticker]);

  return (
    <Container>
      <Box>
        <Typography component="h1" variant="primary">
          {companyData.Name}
        </Typography>
        <Typography component="p" variant="subtitle">
          {companyData.Description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignContent: "space-between" }}>
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
    </Container>
  );
};

export default CompanyOverview;
