import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import styles from "./list-item.module.scss";
interface IListItem {}

const ListItem: React.FC<IListItem> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles["list-item"]}
      // style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : undefined }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt="movie poster"
      />
      <div className={styles.detail}>
        <div className="info-movie">
          <div className="icons">
            <PlayArrow fontSize="large" className={styles.icon} />
            <Add fontSize="large" className={styles.icon} />
            <ThumbUpAltOutlined fontSize="large" className={styles.icon} />
            <ThumbDownAltOutlined fontSize="large" className={styles.icon} />
          </div>
        </div>
        <div className={styles["info-top"]}>
          <span>1 hour 14 mins</span>
          <span className={styles["age-limit"]}>+16</span>
          <span>1999</span>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          doloremque beatae! Consequuntur.
        </div>
        <div className={styles.gerne}>Action</div>
      </div>
    </div>
  );
};

export default ListItem;
