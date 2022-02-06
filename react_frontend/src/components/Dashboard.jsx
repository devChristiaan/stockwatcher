import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Watchlist from "./Watchlist";
import Stock from "./stock";

const Dashboard = ({ ...props }) => {
  return (
    <Container>
      <Grid container>
        <Stock item />
        <Watchlist item />
      </Grid>
    </Container>
  );
};

export default Dashboard;
