import Image from "next/image";
import styles from "./ArticleCard.module.css";
import Link from "next/link";
import { Article } from "@/types";
import getFormattedDate from "@/utils/formatDate";

const ArticleCard = ({ item }: { item: Article }) => {
  const {
    id,
    title,
    likeCount,
    createdAt,
    image,
    writer: { nickname },
  } = item;

  return (
    <Link href={`/addboard/${id}`}>
      <div className={styles.ArticleCard}>
        <div className={styles.section_top}>
          <div className={styles.title}>{title}</div>
          {image && (
            <div className={styles.image}>
              <Image
                src={image}
                width={48}
                height={44.57}
                alt="베스트게시글이미지"
              />
            </div>
          )}
        </div>
        <div className={styles.section_bottom}>
          <div className={styles.section_left}>
            <Image src="../images/logo.svg" alt="" width={24} height={24} />
            <div className={styles.profile_name}>{nickname}</div>
            <div className={styles.date}>{getFormattedDate(createdAt)}</div>
          </div>
          <div className={styles.section_right}>
            <Image
              src="/images/ic_heart.svg"
              width={24}
              height={24}
              alt="좋아요개수아이콘"
            />
            <div className={styles.like_count}>{likeCount}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
