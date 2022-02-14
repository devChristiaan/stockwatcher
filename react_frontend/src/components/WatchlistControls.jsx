import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";

const WatchlistControls = ({ ...props }) => {
  const { edit, add, remove, editMode, setEdit, clearInput } = props;

  const clear = () => {
    clearInput("");
    setEdit(false);
  };

  return (
    <Box>
      {editMode ? (
        <>
          <DoneIcon /> <ClearIcon onClick={clear} />
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
