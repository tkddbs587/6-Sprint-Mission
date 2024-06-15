import { Comment } from "@/types";
import styles from "./ArticleComments.module.css";
import Image from "next/image";
import getFormattedDate from "@/utils/formatDate";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

const ArticleComments = ({
  comment,
  handleDeleteComment,
}: {
  comment: Comment;
  handleDeleteComment: (id: number) => void;
}) => {
  const [kebabButton, setKebabButton] = useState(false);

  const { id, content, createdAt } = comment;
  const { nickname } = comment.writer;

  const handleMenuChange = (e: MouseEvent<HTMLImageElement>) => {
    setKebabButton(!kebabButton);
  };

  const handleDeleteButton = () => {
    handleDeleteComment(id);
  };

  return (
    <div className={styles.ArticleComments}>
      <div className={styles.section_top}>
        <div className={styles.content}>{content}</div>
        <div className={styles.kebabButton}>
          <Image
            className={styles.kebab}
            src="/images/ic_kebab.svg"
            width={24}
            height={24}
            alt="케밥아이콘"
            onClick={handleMenuChange}
          />
          {kebabButton ? (
            <div className={styles.kebabMenu}>
              <div className={styles.fixButton}>수정하기</div>
              <div className={styles.deleteButton} onClick={handleDeleteButton}>
                삭제하기
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={styles.section_bottom}>
        <Image src="/images/logo.svg" width={32} height={32} alt="유저이미지" />
        <div className={styles.section_bottom_right}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.date}>{getFormattedDate(createdAt)}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleComments;
