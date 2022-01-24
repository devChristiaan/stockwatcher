import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(87, 87, 87, 0.56)",
    padding: "10px",
  },
}));

export default useStyles;
