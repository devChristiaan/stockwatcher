import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import LogIn from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard";

function App() {
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
