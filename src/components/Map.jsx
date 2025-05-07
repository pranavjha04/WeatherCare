import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useUrlPosition from "../hooks/useUrlPosition";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityData } from "../features/cities/citiesSlice";
import styles from "./Map.module.css";

function Map() {
  const [mapPosition, setMapPosition] = useState([23.1686, 79.9339]);
  const [lat, lng] = useUrlPosition();
  const { cityList } = useSelector((store) => store.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (lat && lng && (mapPosition[0] !== lat || mapPosition[1] !== lng)) {
      setMapPosition([lat, lng]);
      dispatch(fetchCityData(lat, lng));
    }
  }, [lat, lng, dispatch, mapPosition]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={7}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cityList.map((city, i) => (
          <Marker position={[city.position.lat, city.position.lon]} key={i}>
            <Popup className={styles.popUp}>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [position, map]);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) =>
      navigate(`/app/cities/city?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });

  return null;
}

export default Map;
