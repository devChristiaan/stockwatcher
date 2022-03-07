import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Profile = ({ ...props }) => {
  const userId = useSelector((state) => state.userReducer.user.userId);
  const url = process.env.REACT_APP_API_URL;
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      axiosInstance
        .get(`${url}profile/${userId}/`)
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserData();
  }, [userId]);

  return (
    <Grid
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        marginTop: "7rem",
        marginLeft: "-4rem",
      }}
      container
    >
      <Box
        item
        sx={{ display: "flex", direction: "column", justifyContent: "center" }}
      >
        <TextField
          id="username"
          label="Username"
          type="text"
          variant="standard"
          defaultValue={userData.username}
          value={userData.username}
        />
        <TextField
          id="email"
          label="Email"
          type="text"
          variant="standard"
          defaultValue={userData.email}
          value={userData.email}
        />
        <TextField
          id="first_name"
          label="Name"
          type="text"
          variant="standard"
          defaultValue={userData.first_name}
          value={userData.first_name}
        />
        <TextField
          id="lasrt_name"
          label="Last Name"
          type="text"
          variant="standard"
          defaultValue={userData.last_name}
          value={userData.last_name}
        />
      </Box>
    </Grid>
  );
};

export default Profile;
