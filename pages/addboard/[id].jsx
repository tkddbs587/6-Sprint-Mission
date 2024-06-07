import { useEffect, useState } from "react";
import styles from "./[id].module.css";
import { useRouter } from "next/router";
import { getArticle } from "../../api/api";
import ArticleFeed from "../../components/ArticleFeed";
import ArticleFeedComments from "../../components/ArticleFeedComments";

const Addboard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState();

  // router.query로 현재 페이지 id값 추출해서 쿼리로 보내서 데이터 fetching해오기
  useEffect(() => {
    async function loadArticle(id) {
      if (id) {
        const data = await getArticle(id);
        setArticle(data);
      }
    }
    loadArticle(id);
  }, [id]);

  if (!article) return null;

  return (
    <>
      <div className={styles.Addboard}>
        <ArticleFeed article={article} />
        <ArticleFeedComments id={id} />
      </div>
    </>
  );
};

export default Addboard;
