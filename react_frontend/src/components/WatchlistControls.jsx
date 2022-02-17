import { useState } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import allActions from "../state/actions/index";
import { useSelector, useDispatch } from "react-redux";

const WatchlistControls = ({ ...props }) => {
  const {
    editMode,
    setEdit,
    clearInput,
    newWatchlist,
    watchlists,
    selectedWatchlist,
    user,
  } = props;

  const [rename, setRename] = useState(false);
  const [editWatchlist, setEditWatchlist] = useState({});

  const dispatch = useDispatch();

  const clear = () => {
    clearInput();
    setEdit(false);
  };

  const add = () => {
    setEdit(true);
  };

  const edit = () => {
    setRename(true);
    setEdit(true);
    setEditWatchlist(
      watchlists.find((watchlist) => watchlist.name === selectedWatchlist)
    );
  };

  const remove = () => {
    setEditWatchlist(
      watchlists.find((watchlist) => watchlist.name === selectedWatchlist)
    );
    dispatch(allActions.watchlistActions.deleteWatchlist(editWatchlist.id));
    setEdit(false);
  };

  const done = () => {
    if (!rename) {
      dispatch(allActions.watchlistActions.addWatchlist(user, newWatchlist));
      setEdit(false);
    } else {
      setRename(false);
    }
  };
  return (
    <Box>
      {editMode ? (
        <>
          <DoneIcon onClick={done} /> <ClearIcon onClick={clear} />
        </>
      ) : (
        <>
          <AddIcon
            sx={{
              marginRight: "5px",
            }}
            onClick={add}
          />
          <EditIcon
            sx={{
              fontSize: "1.3rem",
              marginRight: "5px",
            }}
            onClick={edit}
          />
          <DeleteIcon sx={{ fontSize: "1.3rem" }} onClick={remove} />
        </>
      )}
    </Box>
  );
};

export default WatchlistControls;
