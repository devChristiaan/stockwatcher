import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NewsCard = ({ ...props }) => {
  const { category, datetime, headline, image, source, summary } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={headline} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headline}
        </Typography>
        <Typography sx={{ fontSize: 14 }} gutterBottom component="div">
          {source}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
