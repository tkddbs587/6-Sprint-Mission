import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticlesHeader from "./ArticlesHeader";
import getArticlesData from "../api/api";
import styles from "./Articles.module.css";
import { Article } from "@/types";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState<string>("");
  const [order, setOrder] = useState<string>("recent");

  useEffect(() => {
    async function loadData() {
      const data = await getArticlesData({
        orderBy: order,
        keyword: search,
      });
      setArticles(data.list);
    }
    loadData();
  }, [search, order]);

  return (
    <div>
      <ArticlesHeader setSearch={setSearch} setOrder={setOrder} />
      <div className={styles.articles}>
        {articles.map((item) => (
          <ArticleCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
