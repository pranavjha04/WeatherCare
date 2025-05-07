import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Logo.module.css";
import { Link } from "react-router";

function Logo() {
  return (
    <Link to="/">
      <LazyLoadImage
        className={styles.logo}
        src="/img/logo.png"
        alt="Logo"
        effect="blur"
      />
    </Link>
  );
}

export default Logo;
