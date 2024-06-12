import { useEffect, useState } from "react";
import { getArticlesData } from "@/api/api";
import BestArticleCard from "./BestArticleCard";
import styles from "./BestArticles.module.css";
import useScreenWidth from "../hooks/useScreenWidth";
import { Article } from "@/types";

const BestArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const { isTabletSize, isMobileSize } = useScreenWidth();

  useEffect(() => {
    async function loadData() {
      let pageSize = 3;
      if (isTabletSize) {
        pageSize = 2;
      }
      if (isMobileSize) {
        pageSize = 1;
      }
      const data = await getArticlesData({
        pageSize: pageSize,
        orderBy: "like",
      });
      setArticles(data.list);
    }

    loadData();
  }, [isTabletSize, isMobileSize]);

  return (
    <div className={styles.BestArticles}>
      <div className={styles.text_best}>베스트 게시글</div>
      <div className={styles.articles}>
        {articles.map((article) => (
          <BestArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default BestArticles;