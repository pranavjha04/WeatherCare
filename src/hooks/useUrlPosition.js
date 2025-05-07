import { useSearchParams } from "react-router";

function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = Number.parseFloat(searchParams.get("lat"));
  const lng = Number.parseFloat(searchParams.get("lng"));
  return [lat, lng];
}

export default useUrlPosition;
