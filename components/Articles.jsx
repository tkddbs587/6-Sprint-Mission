import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticlesHeader from "./ArticlesHeader";
import getArticlesData from "../api/api";
import styles from "./Articles.module.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("recent");

  useEffect(() => {
    async function loadData() {
      const data = await getArticlesData({
        page: 1,
        pageSize: 10,
        orderBy: order,
        keyword: search,
      });
      setArticles(data.list);
      console.log(data.list);
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
