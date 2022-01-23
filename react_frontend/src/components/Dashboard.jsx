import Watchlist from "./Watchlist";
import Stock from "./stock";

const Dashboard = ({ ...props }) => {
  return (
    <>
      <Stock />
      <Watchlist />
    </>
  );
};

export default Dashboard;
