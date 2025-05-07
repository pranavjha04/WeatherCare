import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useUrlPosition from "../hooks/useUrlPosition";

import Spinner from "../components/Spinner";
import Message from "../components/Message";
import styles from "./City.module.css";

function City() {
  const { isLoading, activeCity, errorMessage } = useSelector(
    (store) => store.cities
  );

  const navigate = useNavigate();
  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    if (!lat || !lng) navigate("/app/cities");
  }, [lat, lng, navigate]);

  useEffect(() => {
    function buttonEvent(e) {
      if (e.code.toLowerCase() === "escape") {
        navigate("/app/cities");
      }
    }

    document.addEventListener("keydown", buttonEvent);

    return () => document.removeEventListener("keydown", buttonEvent);
  }, [navigate]);

  if (isLoading) return <Spinner />;
  if (errorMessage) return <Message>{errorMessage}</Message>;
  if (!activeCity)
    return <Message>Select a city to see weather details</Message>;

  const { cityName, humidity, weather, temperature, position } = activeCity;

  return (
    <div className={styles.container}>
      <div className={styles.weatherCard}>
        <div className={styles.cardHeader}>
          <h2 className={styles.cityTitle}>{cityName}</h2>
          <div className={styles.coordinates}>
            <span>
              {position?.lat.toFixed(2)}°, {position?.lon.toFixed(2)}°
            </span>
          </div>
        </div>

        <div className={styles.mainInfo}>
          {weather?.img && (
            <img
              src={weather.img}
              alt={weather.name}
              className={styles.weatherIcon}
            />
          )}
          <div className={styles.weatherDetails}>
            <div className={styles.condition}>{weather?.name}</div>
            <div className={styles.temperature}>{temperature?.celsius}°C</div>
          </div>
        </div>

        <div className={styles.additionalInfo}>
          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>Fahrenheit</span>
            <span className={styles.infoValue}>
              {temperature?.fahrenheit}°F
            </span>
          </div>
          <div className={styles.infoCard}>
            <span className={styles.infoLabel}>Humidity</span>
            <span className={styles.infoValue}>{humidity}%</span>
          </div>
        </div>
      </div>
      <button
        className={styles.backButton}
        onClick={() => navigate("/app/cities")}
      >
        Back
      </button>
    </div>
  );
}

export default City;
