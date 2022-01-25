import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const NewsCard = ({ ...props }) => {
  const { datetime, headline, image, source, summary, id } = props;

  const milliseconds = datetime * 1000;
  const convertDate = new Date(milliseconds).toLocaleDateString("en-US");
  const date = convertDate.split(" ")[0];

  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Paper elevation={3} sx={{ maxWidth: 345 }}>
        <Box
          padding={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            sx={{ fontSize: 14 }}
            gutterBottom
            component="time"
            variant="subtitle2"
          >
            {date}
          </Typography>
          <Typography
            sx={{ fontSize: 14 }}
            gutterBottom
            component="p"
            variant="subtitle2"
          >
            {source}
          </Typography>
        </Box>
        <CardMedia component="img" height="140" image={image} alt={headline} />
        <Box padding={2}>
          <Typography gutterBottom variant="headline" component="h2">
            {headline}
          </Typography>
          <Typography variant="cardBody" color="text.secondary" component={"p"}>
            {summary}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default NewsCard;
