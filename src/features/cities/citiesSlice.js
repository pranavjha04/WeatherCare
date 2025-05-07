import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/formatDate";

const savedCities = JSON.parse(localStorage.getItem("cityList")) || [];

const API_KEY = `920bda174f134f73881152806241512`;
const BASE_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const initialState = {
  cityList: savedCities,
  activeCity: {},
  isLoading: false,
  errorMessage: "",
};

const citiesSlice = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
      state.errorMessage = "";
    },
    create: {
      prepare(cityName, position) {
        return {
          payload: {
            id: crypto.randomUUID(),
            cityName,
            position,
            date: formatDate(),
          },
        };
      },
      reducer(state, action) {
        const updatedList = [action.payload, ...state.cityList];
        localStorage.setItem("cityList", JSON.stringify(updatedList));

        state.cityList = updatedList;
        state.isLoading = false;
        state.errorMessage = "";
      },
    },
    deleteCity(state, action) {
      const updatedList = state.cityList.filter(
        (city) => city.id !== action.payload
      );
      localStorage.setItem("cityList", JSON.stringify(updatedList));
      state.cityList = updatedList;
    },
    error(state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
    setActive: {
      prepare(data) {
        return {
          payload: {
            cityName: data.location.name,
            humidity: data.current.humidity,
            weather: {
              name: data.current.condition.text,
              img: data.current.condition.icon,
            },
            temperature: {
              celsius: data.current.temp_c,
              fahrenheit: data.current.temp_f,
            },
            position: {
              lat: data.location.lat,
              lon: data.location.lon,
            },
          },
        };
      },
      reducer(state, action) {
        state.activeCity = { ...action.payload };
      },
    },
  },
});

export const { create, deleteCity, error, loading, setActive } =
  citiesSlice.actions;

export function fetchCityData(lat, lon) {
  return async function (dispatch, getState) {
    dispatch({ type: "cities/loading" });

    try {
      const res = await fetch(`${BASE_URL}&q=${lat},${lon}&aqi=yes&alerts=yes`);
      if (!res.ok)
        throw new Error(
          "There was a Problem ☹️, try choosing a different Location 😄!"
        );

      const data = await res.json();

      if (
        data.error ||
        !data.location ||
        !data.location.name ||
        typeof data.location.lat !== "number" ||
        typeof data.location.lon !== "number"
      ) {
        throw new Error(
          data.error?.message || "Invalid city data received from API"
        );
      }

      const newCityName = data.location.name;
      const { cityList } = getState().cities;

      const duplicate = cityList.find(
        (city) =>
          city.position.lat === data.location.lat &&
          city.position.lon === data.location.lon
      );

      if (duplicate) {
        dispatch(deleteCity(duplicate.id));
      }

      dispatch(setActive(data));
      dispatch(
        create(newCityName, {
          lat: data.location.lat,
          lon: data.location.lon,
        })
      );
    } catch (err) {
      dispatch(error(err.message || "Failed to fetch city data"));
    }
  };
}
export default citiesSlice.reducer;
