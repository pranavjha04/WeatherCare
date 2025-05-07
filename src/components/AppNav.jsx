import { Link } from "react-router";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <div className={styles.links}>
      <Link to="/app/cities" className={styles.navLink}>
        CITIES
      </Link>
    </div>
  );
}

export default AppNav;
