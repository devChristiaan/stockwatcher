import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import allActions from "../state/actions/index";
import { useDispatch } from "react-redux";

const WatchlistControls = ({ ...props }) => {
  const {
    editMode,
    setEdit,
    clearInput,
    selectedWatchlist,
    newWatchlistName,
    setNewWatchlistName,
    user,
  } = props;

  const rename = useRef();
  const [editWatchlist, setEditWatchlist] = useState({});
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setEditWatchlist(
  //     watchlists.find((watchlist) => watchlist.name === selectedWatchlist)
  //   );
  // }, [selectedWatchlist, watchlists]);

  const clear = () => {
    clearInput();
    setEdit(false);
    rename.current = "false";
  };

  const add = () => {
    setEdit(true);
    rename.current = "false";
  };

  const edit = () => {
    setNewWatchlistName(selectedWatchlist);
    rename.current = "true";
    setEdit(true);
  };

  const remove = () => {
    dispatch(allActions.watchlistActions.deleteWatchlist(editWatchlist.id));
    setEdit(false);
  };

  const done = () => {
    if (rename.current === "false") {
      dispatch(
        allActions.watchlistActions.addWatchlist(user, newWatchlistName)
      );
      setEdit(false);
      rename.current = "false";
      clearInput();
    } else {
      dispatch(
        allActions.watchlistActions.editWatchlist(
          editWatchlist.id,
          user,
          newWatchlistName
        )
      );
      rename.current = "false";
      setEdit(false);
      clearInput();
    }
  };
  return (
    <Box>
      {editMode ? (
        <>
          <DoneIcon
            sx={{
              fontSize: "1.3rem",
              marginRight: "10px",
            }}
            onClick={done}
          />{" "}
          <ClearIcon onClick={clear} />
        </>
      ) : (
        <>
          <AddIcon
            sx={{
              marginRight: "10px",
            }}
            onClick={add}
          />
          <EditIcon
            sx={{
              fontSize: "1.3rem",
              marginRight: "10px",
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
