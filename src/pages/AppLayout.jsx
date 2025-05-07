import { useSelector } from "react-redux";

import Map from "../components/Map";
import Profile from "../components/Profile";
import SideBar from "../components/SIdeBar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const { isAuthenticated } = useSelector((store) => store.account);
  return (
    <div className={styles.container}>
      <SideBar />
      <Map />
      {isAuthenticated && <Profile />}
    </div>
  );
}

export default AppLayout;
