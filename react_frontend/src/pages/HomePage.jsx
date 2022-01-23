import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import NewsCard from "../components/NewsCard";

const HomePage = () => {
  const apiKey = process.env.REACT_APP_FINNHUB_API_KEY;

  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStockData = async () => {
      const response = await fetch(
        `https://finnhub.io/api/v1/news?category=general&token=${apiKey}`
      );
      const data = await response.json();
      setNewsData(data);
      setLoading(false);
    };
    getStockData();
  }, []);

  return (
    <Container>
      <Typography variant="h2">Stock Watchers</Typography>
      <Paper>
        <Container>
          <Typography variant="h3" gutterBottom>
            Current News
          </Typography>
          {newsData.map((news) => {
            return (
              <NewsCard
                category={news.category}
                datetime={news.datetime}
                headline={news.headline}
                image={news.image}
                source={news.source}
                summary={news.summary}
              />
            );
          })}
        </Container>
      </Paper>
    </Container>
  );
};

export default HomePage;
