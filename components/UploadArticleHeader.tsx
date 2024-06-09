import styles from "./UploadArticleHeader.module.css";

const UploadArticleHeader = ({
  isButtonDisabled,
}: {
  isButtonDisabled: boolean;
}) => {
  return (
    <div className={styles.UploadArticleHeader}>
      <div className={styles.header_text}>게시글 쓰기</div>
      <button
        disabled={isButtonDisabled}
        type="submit"
        className={`${styles.button} ${
          isButtonDisabled ? "" : styles.activation
        }`}
      >
        등록
      </button>
    </div>
  );
};

export default UploadArticleHeader;
