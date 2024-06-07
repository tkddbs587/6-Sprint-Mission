import Button from "./Button";
import styles from "./UploadArticleHeader.module.css";

const UploadArticleHeader = ({ handleButtonSubmit }) => {
  return (
    <div className={styles.UploadArticleHeader}>
      <div className={styles.header_text}>게시글 쓰기</div>
      <Button handleButtonSubmit={handleButtonSubmit} />
    </div>
  );
};

export default UploadArticleHeader;
