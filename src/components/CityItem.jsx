import { deleteCity, fetchCityData } from "../features/cities/citiesSlice";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const dispatch = useDispatch();

  const { cityName, date, id } = city;
  const { lat, lon } = city.position;

  function handleClick() {
    dispatch(fetchCityData(lat, lon));
  }
  function handleDelete(e) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(deleteCity(id));
  }
  return (
    <div className={`${styles.item}`}>
      <Link
        to={`city?lat=${lat}&lng=${lon}`}
        className={styles.link}
        onClick={handleClick}
      >
        <h4>{cityName}</h4>
        <p>{date}</p>
      </Link>
      <button className={`${styles.deleteBtn}`} onClick={handleDelete}>
        <img src="/img/delete.svg" alt="delete" className={styles.icon} />
      </button>
    </div>
  );
}

export default CityItem;
