import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticlesHeader from "./ArticlesHeader";
import styles from "./Articles.module.css";
import { Article } from "@/types";
import { getArticlesData, PAGE_SIZE } from "@/api/api";
import Pagination from "./Pagination";

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState<string>("");
  const [order, setOrder] = useState<string>("recent");
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  useEffect(() => {
    async function loadData() {
      const data = await getArticlesData({
        page: page,
        orderBy: order,
        keyword: search,
      });
      setArticles(data.list);
      setLastPage(Math.ceil(data.totalCount / PAGE_SIZE));
    }
    loadData();
  }, [search, order, page]);

  useEffect(() => {
    setPage(1);
  }, [order]);

  return (
    <div>
      <ArticlesHeader setSearch={setSearch} setOrder={setOrder} />
      <div className={styles.articles}>
        {articles.map((item) => (
          <ArticleCard item={item} key={item.id} />
        ))}
      </div>
      <Pagination lastPage={lastPage} page={page} setPage={setPage} />
    </div>
  );
};

export default Articles;
