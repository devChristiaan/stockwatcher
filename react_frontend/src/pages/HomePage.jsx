import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import NewsCard from "../components/NewsCard";
import Grid from "@mui/material/Grid";
import HeroSection from "../components/HeroSection";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AppNewsCardPagination from "../components/AppNewsCardPagination";

const HomePage = () => {
  const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [length, setLength] = useState(10);

  useEffect(() => {
    const getNewsData = async () => {
      const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&minId=10&token=${apiKey}`
      );
      const data = await response.json();
      setNewsData(data);
      setLoading(false);
    };
    getNewsData();
  }, []);

  return (
    <>
      <HeroSection />
      <Container sx={{ marginY: 5 }}>
        <Paper>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            paddingX={3}
          >
            <AppNewsCardPagination
              displayData={newsData}
              numberOfItemsPerPage={6}
            />
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default HomePage;
