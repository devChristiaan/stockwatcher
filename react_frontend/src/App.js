import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import LogIn from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./state/actions";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const authTokens = useSelector((state) =>
    !state.userReducer.user.tokens
      ? false
      : state.userReducer.user.tokens.refresh
  );
  const user = useSelector((state) =>
    !state.userReducer.user ? false : state.userReducer.user.user
  );

  useEffect(() => {
    let fithteenMinutes = 1000 * 60 * 15;

    let interval = setInterval(() => {
      if (authTokens) {
        dispatch(allActions.userActions.refresh(authTokens, user));
      }
    }, fithteenMinutes);

    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route element={<NotFound />} path="*" />
          <Route element={<HomePage />} path="/" exact />
          <Route element={<LogIn />} path="/login" exact />
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/dashboard" exact />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
