import React from "react";
import Articles from "../components/Articles";
import BestArticles from "../components/BestArticles";
import styles from "./boards.module.css";

const boards = () => {
  return (
    <>
      <div className={styles.boards}>
        <BestArticles />
        <Articles />
      </div>
    </>
  );
};

export default boards;
