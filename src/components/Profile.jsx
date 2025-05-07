import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";
import { logout } from "../features/account/accountSlice";
import styles from "./Profile.module.css";

function Profile() {
  const { userName, img } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(logout());
  }
  return (
    <div className={styles.profileContainer}>
      <img className={styles.profileImg} src={img} alt={userName} />
      <div className={styles.others}>
        <p className={styles.name}>{userName}</p>
        <button className={`btn`} onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default memo(Profile);
