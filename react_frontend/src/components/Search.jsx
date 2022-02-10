import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import allActions from "../state/actions/index";

export default function Search() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(allActions.stockActions.setTicker(searchValue));
    setSearchValue("");
    navigate("/dashboard");
  };

  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      onSubmit={(e) => submit(e)}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Stock"
        inputProps={{ "aria-label": "Search for a Stock" }}
        value={searchValue}
        onChange={handleChange}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
