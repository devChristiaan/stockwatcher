import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions/index";

const Watchlist = () => {
  const watchlists = useSelector((state) => state.watchlistReducer.watchlists);
  const authTokens = useSelector((state) => state.userReducer.user.tokens);
  const user = useSelector((state) => state.userReducer.user.user);

  const dispatch = useDispatch();

  const [watchlist, setWatchlist] = useState("");

  useEffect(() => {
    if (!authTokens) {
      dispatch(allActions.userActions.logout(user));
    }
    dispatch(allActions.watchlistActions.getWatchlists(authTokens));
    setWatchlist(watchlists[0]?.name);
  }, [authTokens, user, dispatch]);

  useEffect(() => {
    if (watchlists.length >= 1) {
      setWatchlist(watchlists[0]?.name);
    }
  }, [watchlists]);

  const handleChange = (event) => {
    setWatchlist(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Typography>Watchlists</Typography>
      <FormControl fullWidth variant="standard">
        <Select
          sx={{
            fontSize: "1rem",
          }}
          value={watchlist}
          label="Watchlist"
          onChange={(e) => handleChange(e)}
        >
          {watchlists ? (
            watchlists.map((watchlist) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <MenuItem
                  variant="watchlist"
                  key={watchlist.id}
                  value={watchlist.name}
                >
                  {watchlist.name}
                  <Box
                    sx={{
                      paddingLeft: "15px",
                      marginLeft: "20px",
                    }}
                  >
                    <EditIcon
                      sx={{
                        fontSize: "1.3rem",
                        marginRight: "5px",
                      }}
                    />
                    <DeleteIcon sx={{ fontSize: "1.3rem" }} />
                  </Box>
                </MenuItem>
              </div>
            ))
          ) : (
            <Typography>You do not have any watchlist yet</Typography>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Watchlist;
