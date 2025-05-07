import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/account/accountSlice";

import styles from "./Login.module.css";
import NavBar from "../components/NavBar";

function Login() {
  const [email, setEmail] = useState("pranav@gmail.com");
  const [password, setPassword] = useState("weather");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((store) => store.account);

  function checkLogin() {
    if (email === "pranav@gmail.com" && password === "weather") {
      dispatch(login(email, password));
    }
  }
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    function buttonEvent(e) {
      if (e.code === "Enter") {
        checkLogin();
      }
    }
    document.addEventListener("keydown", buttonEvent);
    return () => document.removeEventListener("keydown", buttonEvent);
  });
  function handleSubmit(e) {
    e.preventDefault();
    checkLogin();
  }
  return (
    <div className={styles.container}>
      <NavBar />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="pranav@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formInput}>
          <label htmlFor="pwd">Password</label>
          <input
            type="text"
            id="pwd"
            value={password}
            placeholder="weather"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link className="btn" onClick={checkLogin}>
          Login
        </Link>
      </form>
    </div>
  );
}

export default Login;
