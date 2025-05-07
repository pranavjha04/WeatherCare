import { Link } from "react-router";

import NavBar from "../components/NavBar";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <NavBar />
      <section>
        <header>
          <h1>Track the Weather</h1>
          <h1>WeatherCare helps you do that.</h1>
        </header>
        <Link to="/login" className={`btn ${styles.btn}`}>
          Get Started
        </Link>
      </section>
    </div>
  );
}

export default HomePage;
