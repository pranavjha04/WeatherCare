import { useSelector } from "react-redux";

import CityItem from "../components/CityItem";
import Message from "../components/Message";
import styles from "./CityList.module.css";

function CityList() {
  const { cityList } = useSelector((store) => store.cities);

  return (
    <div className={styles.container}>
      <ul className={styles.cityList}>
        {!cityList.length ? (
          <Message>
            👋No cities added yet. Click on the map to add a city!
          </Message>
        ) : (
          cityList.map((city) => <CityItem city={city} key={city.id} />)
        )}
      </ul>
    </div>
  );
}

export default CityList;
