import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
