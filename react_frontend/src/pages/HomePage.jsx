import { useState, UseEffect, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../state/actions";

const HomePage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const authTokens = useSelector((state) => state.userReducer.user.tokens);

  useEffect(() => {
    setInterval(() => {
      dispatch(allActions.userActions.refresh(authTokens));
    }, 1000);
  }, [authTokens, loading]);

  return (
    <div className="App">
      <p>Hello from React</p>
    </div>
  );
};

export default HomePage;
