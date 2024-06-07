import { useEffect, useState } from "react";
import styles from "./ArticleFeedComments.module.css";
import getArticleComments from "../api/api";
import ArticleComments from "./ArticleComments";

const ArticleFeedComments = ({ id }) => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const isButtonDisabled = value.trim() === "" ? true : false;

  useEffect(() => {
    async function loadArticleComments() {
      const data = await getArticleComments({ id: id, limit: 5 });
      setComments(data.list);
    }
    loadArticleComments();
  }, []);

  return (
    <div>
      <div className={styles.form}>
        <div className={styles.label}>댓글 달기</div>
        <textarea
          name="content"
          value={value}
          onChange={handleInputChange}
          className={styles.textarea}
          placeholder="내용을 입력해주세요"
        />
        <div className={styles.button_box}>
          <button
            className={`${styles.button} ${
              isButtonDisabled ? "" : styles.activation
            }`}
          >
            등록
          </button>
        </div>
      </div>
      <div className={styles.comments}>
        {comments &&
          comments.map((comment) => (
            <ArticleComments comment={comment} key={comment.id} />
          ))}
      </div>
    </div>
  );
};

export default ArticleFeedComments;
