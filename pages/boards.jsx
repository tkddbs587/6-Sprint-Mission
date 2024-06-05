import Articles from "../components/Articles";
import BestArticles from "../components/BestArticles";
import Nav from "../components/Nav";
import styles from "./boards.module.css";

const boards = () => {
  return (
    <>
      <Nav />
      <div className={styles.boards}>
        <BestArticles />
        <Articles />
      </div>
    </>
  );
};

export default boards;
