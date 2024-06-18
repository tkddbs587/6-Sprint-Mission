import { Comment } from "@/types";
import styles from "./ArticleComments.module.css";
import Image from "next/image";
import getFormattedDate from "@/utils/formatDate";
import { ChangeEvent, MouseEvent, useState } from "react";

const ArticleComments = ({
  comment,
  handleDeleteComment,
  handlePatchComment,
}: {
  comment: Comment;
  handleDeleteComment: (id: number) => void;
  handlePatchComment: (id: number, newContent: string) => void;
}) => {
  const [kebabButtonVisible, setKebabButtonVisible] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const { id, content, createdAt } = comment;
  const [newContent, setNewContent] = useState(content);
  const { nickname } = comment.writer;

  const isButtonDisabled = newContent.trim() === "" ? true : false;

  const handleMenuChange = (e: MouseEvent<HTMLImageElement>) => {
    setKebabButtonVisible(!kebabButtonVisible);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  const handleEditSubmit = async () => {
    handlePatchComment(id, newContent);
    setEditMode(false);
  };

  const handleDeleteButton = () => {
    handleDeleteComment(id);
  };

  return (
    <div className={styles.ArticleComments}>
      <div className={styles.section_top}>
        {editMode ? (
          <div className={styles.edit_mode}>
            <div>
              <textarea
                className={styles.edit_input}
                value={newContent}
                placeholder="내용을 입력해주세요"
                onChange={handleContentChange}
              />
            </div>
            <div className={styles.section_button}>
              <button
                className={`${styles.edit_button} ${isButtonDisabled ? "" : styles.active}`}
                onClick={handleEditSubmit}
              >
                완료
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.content}>{content}</div>
        )}
        <div className={styles.kebabButton}>
          <Image
            className={styles.kebab}
            src="/images/ic_kebab.svg"
            width={24}
            height={24}
            alt="케밥아이콘"
            onClick={handleMenuChange}
          />
          {kebabButtonVisible ? (
            <div className={styles.kebabMenu}>
              <div className={styles.fixButton} onClick={handleEditClick}>
                수정하기
              </div>
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
