import { useNavigate } from "react-router";

import styles from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <h2>Oops!! Wrong Page ;(</h2>
      <button className="btn" onClick={handleClick}>
        Home
      </button>
    </div>
  );
}

export default NotFound;
