import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import bullCoverImage from "../img/bull.jpg";
import useStyles from "../styling/HeroSectionStyling";

const HeroSection = () => {
  const styles = useStyles();

  return (
    <Box sx={{ position: "relative" }}>
      <CardMedia
        component="img"
        height="680"
        image={bullCoverImage}
        alt="Bull cover image"
      />
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        className={styles.overlay}
        spacing={6}
      >
        <Typography variant="HeroTitle">Stock Watchers</Typography>
        <Typography variant="HeroSubTitle">
          Keeping an eye on your Assets
        </Typography>
      </Stack>
    </Box>
  );
};

export default HeroSection;
