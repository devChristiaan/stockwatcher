import {
  Button,
  Container,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions/index";

const Watchlist = () => {
  const watchlists = useSelector((state) => state.watchlistReducer.watchlists);
  const authTokens = useSelector((state) => state.userReducer.user.tokens);
  const user = useSelector((state) => state.userReducer.user.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authTokens) {
      dispatch(allActions.userActions.logout(user));
    }
    dispatch(allActions.watchlistActions.getWatchlists(authTokens));
  }, [authTokens, user, dispatch]);

  return (
    <Container>
      <Card>
        <Typography>Watchlists</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {watchlists ? (
              watchlists.map((watchlist) => (
                <TableRow key={watchlist.id}>
                  <TableCell>{watchlist.name}</TableCell>
                  <TableCell align="right">
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography>You do not have any watchlist yet</Typography>
            )}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
};

export default Watchlist;
