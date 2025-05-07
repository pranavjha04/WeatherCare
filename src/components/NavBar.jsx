import { Link } from "react-router";
import styles from "./NavBar.module.css";
import Logo from "./Logo";
import { memo } from "react";
function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.links}>
        <Link to="/about">About</Link>
        <Link to="/login" className={`btn`}>
          Login
        </Link>
      </ul>
    </nav>
  );
}

export default memo(NavBar);
