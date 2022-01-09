import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import LogIn from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import Dashboard from "./components/Dashboard";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route element={<HomePage />} path="/" exact />
          <Route element={<LogIn />} path="/login" exact />
          <Route element={<Dashboard />} path="/dashboard" exact />
          <Route element={<PrivateRoute />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
