import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import cx from "classnames";

import { useState } from "react";
import netflixLogo from "../../img/netflix.svg";
import styles from "./navbar.module.scss";
interface INavbar {}

const Navbar: React.FC<INavbar> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);

    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <nav
      className={cx(styles.navbar, { [styles["black-navbar"]]: isScrolled })}
    >
      <div className={styles["left-nav"]}>
        <img src={netflixLogo} alt="netflix logo" />
        <div className={styles.nav}>
          <span className={styles.link}>Homepage</span>
          <span className={styles.link}>Series</span>
          <span className={styles.link}>Movies</span>
          <span className={styles.link}>New and Popular</span>
          <span className={styles.link}>My List</span>
        </div>
      </div>
      <div className={styles["right-nav"]}>
        <Search className={styles.icon} />
        KID
        <Notifications className={styles.icon} />
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="avatar"
        />
        <div className={styles.dropdown}>
          <ArrowDropDown className={styles.icon} />
          <div className={styles["dropdown-menu"]}>
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
