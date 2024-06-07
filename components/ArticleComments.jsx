import styles from "./ArticleComments.module.css";
import Image from "next/image";

const ArticleComments = ({ comment }) => {
  const { content, createdAt } = comment;
  const { nickname } = comment.writer;
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className={styles.ArticleComments}>
      <div className={styles.section_top}>
        <div className={styles.content}>{content}</div>
        <Image
          src="/images/ic_kebab.svg"
          width={24}
          height={24}
          alt="케밥아이콘"
        />
      </div>
      <div className={styles.section_bottom}>
        <Image src="/images/logo.svg" width={32} height={32} alt="유저이미지" />
        <div className={styles.section_bottom_right}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.date}>{formattedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComments;
