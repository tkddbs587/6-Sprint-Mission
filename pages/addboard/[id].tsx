import { useEffect, useState } from "react";
import styles from "./[id].module.css";
import { useRouter } from "next/router";
import { getArticle } from "../../api/api";
import ArticleFeed from "../../components/ArticleFeed";
import ArticleFeedComments from "../../components/ArticleFeedComments";
import React from "react";

const Addboard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState();

  // router.query로 현재 페이지 id값 추출해서 쿼리로 보내서 데이터 fetching해오기
  useEffect(() => {
    async function loadArticle(id: string) {
      const data = await getArticle(id);
      setArticle(data);
    }
    if (typeof id === "string") {
      loadArticle(id);
    }
  }, [id]);

  if (!article) return null;

  return (
    <>
      <div className={styles.Addboard}>
        <ArticleFeed article={article} />
        <ArticleFeedComments id={id as string} />
      </div>
    </>
  );
};

export default Addboard;
