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

const Watchlist = ({ ...props }) => {
  const watchlists = useSelector((state) => state.watchlistReducer.watchlists);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.watchlistActions.getWatchlists());
  }, [dispatch]);

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
            {watchlists
              ? watchlists.map((watchlist) => (
                  <TableRow key={watchlist.id}>
                    <TableCell>{watchlist.name}</TableCell>
                    <TableCell align="right">
                      <Button>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </Card>
    </Container>
  );
};

export default Watchlist;
