import FeaturedList from "../../Components/featured-list/FeaturedList";
import Featured from "../../Components/featured/Featured";
import Footer from "../../Components/footer/Footer";
import Navbar from "../../Components/navbar/Navbar";
import styles from "./home.module.scss";
interface IHome {}

const Home: React.FC<IHome> = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <Featured type="movie" />
      <FeaturedList title="Continue to Watch" />
      <FeaturedList title="Popular on Netflix" />
      <FeaturedList title="Popular in your Country" />
      <Footer />
    </div>
  );
};

export default Home;
