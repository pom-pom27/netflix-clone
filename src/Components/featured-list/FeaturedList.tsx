import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./featured-list.scss";

interface IFeaturedList {
  title: string;
}

type Direction = "left" | "right";

const totalSlide = 10;
const step = 3;

const translateHorizontal = (distance: number, itemTotalWidth: number) =>
  itemTotalWidth * (totalSlide / 3.333) + distance / 10;

const FeaturedList: React.FC<IFeaturedList> = ({ title }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleCarousel = (direction: Direction) => {
    if (!listRef) return;
    let distance = listRef.current!.getBoundingClientRect().x - 70;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - step);
      listRef.current!.style.transform = `translateX(${translateHorizontal(
        distance,
        23
      )}rem)`;
      //show left arrow again when in the first slide
      if (slideNumber === step) {
        setIsScrolled(false);
      }
    } else if (direction === "right" && slideNumber < 2) {
      setSlideNumber(slideNumber + step);
      listRef.current!.style.transform = `translateX(${translateHorizontal(
        distance,
        -23
      )}rem)`;
      setIsScrolled(true);
    }
  };
  console.log(slideNumber);

  return (
    <div className="featured-list">
      <span className="title">{title}</span>
      <div className="list-wrapper">
        <ArrowBackIosOutlined
          style={{
            width: "5rem",
            height: "100%",
            display: !isScrolled ? "none" : "inline",
          }}
          onClick={() => handleCarousel("left")}
          className="arrow-icon left"
        />
        <div className="list" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          style={{ width: "5rem", height: "100%" }}
          onClick={() => handleCarousel("right")}
          className="arrow-icon right"
        />
      </div>
    </div>
  );
};

export default FeaturedList;
