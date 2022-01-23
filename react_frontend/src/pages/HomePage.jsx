import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import NewsCard from "../components/NewsCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const HomePage = () => {
  const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNewsData = async () => {
      const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
      );
      const data = await response.json();
      setNewsData(data);
      setLoading(false);
    };
    getNewsData();
  }, []);

  return (
    <Container>
      <Paper paddingX={3}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          paddingX={3}
        >
          {newsData.map((news) => {
            return (
              <NewsCard
                key={news.id}
                datetime={news.datetime}
                headline={news.headline}
                image={news.image}
                source={news.source}
                summary={news.summary}
              />
            );
          })}
        </Grid>
      </Paper>
    </Container>
  );
};

export default HomePage;
