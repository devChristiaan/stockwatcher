import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Watchlist from "./Watchlist";
import Stock from "./stock";

const Dashboard = ({ ...props }) => {
  return (
    <Container>
      <Grid container>
        <Stock item />
        <Box sx={{ overflow: "auto" }}>
          <Drawer
            sx={{
              width: 240,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                marginTop: 8.3,
                width: 240,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Divider />
            <List>
              <Watchlist/>
            </List>
          </Drawer>
        </Box>
      </Grid>
    </Container>
  );
};

export default Dashboard;
