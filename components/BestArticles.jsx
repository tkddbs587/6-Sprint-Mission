import { useEffect, useState } from "react";
import getArticlesData from "../api/api";
import BestArticleCard from "./BestArticleCard";
import styles from "./BestArticles.module.css";

const BestArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getArticlesData({
        pageSize: 3,
        orderBy: "like",
      });
      setArticles(data.list);
      console.log(data.list);
      console.log(articles);
    }
    loadData();
  }, []);

  return (
    <div className={styles.BestArticles}>
      <div className={styles.text_best}>베스트 게시글</div>
      <div className={styles.articles}>
        {articles.map((item) => (
          <BestArticleCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default BestArticles;
