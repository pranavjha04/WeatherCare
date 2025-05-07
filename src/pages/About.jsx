import NavBar from "../components/NavBar";
import styles from "./About.module.css";
import Logo from "../components/Logo";

function About() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>

          <p className={styles.text}>
            WeatherCare is an interactive weather application that allows you to
            discover weather conditions for locations worldwide. Simply click
            anywhere on the map to instantly view detailed weather data for that
            location.
          </p>
          <p className={styles.text}>
            Whether you're planning a trip, checking conditions for outdoor
            activities, or just curious about the weather elsewhere, WeatherCare
            provides the information you need at your fingertips.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌍</div>
              <h3>Interactive Map</h3>
              <p>Click anywhere to check weather conditions</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📌</div>
              <h3>Save Locations</h3>
              <p>Keep track of your favorite places</p>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📱</div>
              <h3>Local Storage</h3>
              <p>Your preferences saved across sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
