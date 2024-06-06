import Link from "next/link";
import styles from "./UploadArticleHeader.module.css";

const UploadArticleHeader = () => {
  return (
    <div className={styles.UploadArticleHeader}>
      <div className={styles.header_text}>게시글 쓰기</div>
      <Link href="" className={styles.button}>
        등록
      </Link>
    </div>
  );
};

export default UploadArticleHeader;
