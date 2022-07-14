import styles from "./footer.module.scss";
interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return <div className={styles.footer}></div>;
};

export default Footer;
