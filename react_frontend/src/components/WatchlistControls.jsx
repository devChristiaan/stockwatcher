import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const WatchlistControls = ({ ...props }) => {
  const { edit, add, remove } = props;

  return (
    <Box>
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
    </Box>
  );
};

export default WatchlistControls;
