import { useEffect, useState } from "react";
import styles from "./[id].module.css";
import { useRouter } from "next/router";
import { getArticle } from "../../api/api";

const Addboard = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    async function loadArticle(id) {
      if (id) {
        const data = await getArticle(id);
        // console.log(data);
        setArticle(data);
      }
    }
    loadArticle(id);
  }, [id]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const isButtonDisabled = value === "" ? true : false;

  // router.query로 현재 페이지 id값 추출해서 쿼리로 보내서 데이터 fetching해오기
  return (
    <>
      <div className={styles.Addboard}>
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
      </div>
    </>
  );
};

export default Addboard;
