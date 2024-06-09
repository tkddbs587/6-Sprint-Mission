import Image from "next/image";
import styles from "./BestArticleCard.module.css";
import Link from "next/link";
import { Article } from "@/types";

const BestArticleCard = ({ article }: { article: Article }) => {
  const { id, title, likeCount, createdAt, image } = article;
  const { nickname } = article.writer;
  const date = new Date(createdAt);
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <Link href={`/addboard/${id}`}>
      <div className={styles.BestArticleCard}>
        <div className={styles.section_top}>
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
        </div>
        <div className={styles.article_bottom}>
          <div className={styles.article_bottom_profile}>
            <div className={styles.profile_name}>{nickname}</div>
            <div className={styles.like}>
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
          </div>
          <div className={styles.date}>{formattedDate}</div>
        </div>
      </div>
    </Link>
  );
};

export default BestArticleCard;
