import Image from "next/image";

import styles from "./BestArticleCard.module.css";

const BestArticleCard = ({ item }) => {
  const { title, likeCount, createdAt, image } = item;
  const { id, nickname } = item.writer;
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <div className={styles.BestArticleCard}>
      <Image
        src="/images/img_best_badge.svg"
        width={102}
        height={30}
        alt="베스트게시글뱃지"
      />
      <div className={styles.article_top}>
        <div className={styles.title}>{title}</div>
        {image ? (
          <div className={styles.image}>
            <Image
              src={image}
              width={48}
              height={44.57}
              alt="베스트게시글이미지"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.article_bottom}>
        <div className={styles.article_bottom_profile}>
          <div className={styles.profile_name}>{nickname}</div>
          <div>
            <Image
              src="/images/ic_heart.svg"
              width={16}
              height={16}
              alt="좋아요개수아이콘"
            />
          </div>
          <div className={styles.like_count}>{likeCount}</div>
        </div>
        <div className={styles.date}>{formattedDate}</div>
      </div>
    </div>
  );
};

export default BestArticleCard;
