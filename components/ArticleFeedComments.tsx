import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import styles from "./ArticleFeedComments.module.css";
import {
  deleteComment,
  getArticleComments,
  patchComment,
  postArticleComment,
} from "@/api/api";

import ArticleComments from "./ArticleComments";
import { Comment } from "@/types";

const ArticleFeedComments = ({ id }: { id: string }) => {
  const [content, setContent] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isChangeComments, setIsChangeComments] = useState<boolean>(false);

  const isButtonDisabled = content.trim() === "" ? true : false;

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePatchComment = async (targetId: number, newContent: string) => {
    const data: Comment = await patchComment({ targetId, newContent });
    if (data) {
      setComments((prevComments) =>
        prevComments.map((comment) => {
          if (comment.id === targetId) {
            return data;
          }
          return comment;
        }),
      );
    }
  };

  const handleDeleteComment = async (targetId: number) => {
    const result = await deleteComment(targetId);
    if (result) {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== targetId),
      );
    }
  };

  useEffect(() => {
    async function loadArticleComments(articleId: string) {
      const data = await getArticleComments({
        articleId: articleId,
        limit: 10,
      });
      setComments(data.list);
    }
    loadArticleComments(id);
  }, [isChangeComments]);

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await postArticleComment({
      articleId: id,
      content: content,
    });
    setIsChangeComments(!isChangeComments);
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.form}>
          <div className={styles.label}>댓글 달기</div>
          <textarea
            name="content"
            value={content}
            onChange={handleInputChange}
            className={styles.textarea}
            placeholder="내용을 입력해주세요"
          />
          <div className={styles.button_box}>
            <button
              type="submit"
              className={`${styles.button} ${
                isButtonDisabled ? "" : styles.activation
              }`}
            >
              등록
            </button>
          </div>
        </div>
      </form>
      <div className={styles.comments}>
        {comments.length &&
          comments.map((comment) => (
            <ArticleComments
              comment={comment}
              key={comment.id}
              handleDeleteComment={handleDeleteComment}
              handlePatchComment={handlePatchComment}
            />
          ))}
      </div>
    </div>
  );
};

export default ArticleFeedComments;
