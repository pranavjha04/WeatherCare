import { memo } from "react";
import { Outlet } from "react-router";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./SideBar.module.css";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  );
}

export default memo(SideBar);
