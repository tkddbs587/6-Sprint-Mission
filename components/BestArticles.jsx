import { useEffect, useState } from "react";
import getArticlesData from "../api/api";
import BestArticleCard from "./BestArticleCard";

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
    <div>
      베스트 게시글
      {articles.map((item) => (
        <BestArticleCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default BestArticles;
