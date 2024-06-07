import Image from "next/image";
import styles from "./ArticleFeed.module.css";

const ArticleFeed = ({ article }) => {
  const { title, createdAt, likeCount, content } = article;
  const { nickname } = article.writer;
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className={styles.ArticleFeed}>
      <div className={styles.section_top}>
        <div className={styles.title}>{title}</div>
        <Image
          src="/images/ic_kebab.svg"
          width={24}
          height={24}
          alt="케밥아이콘"
        />
      </div>
      <div className={styles.section_middle}>
        <div className={styles.section_middle_left}>
          <Image
            src="/images/logo.svg"
            width={24}
            height={24}
            alt="프로필이미지"
          />
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.date}>{formattedDate}</div>
        </div>
        <div className={styles.section_middle_right}>
          <Image
            src="/images/ic_heart.svg"
            width={24}
            height={24}
            alt="좋아요하트"
          />
          <div className={styles.likeCount}>{likeCount}</div>
        </div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default ArticleFeed;
