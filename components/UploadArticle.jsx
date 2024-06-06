import React from "react";
import UploadArticleHeader from "./UploadArticleHeader";
import FileInput from "./FileInput";
import styles from "./UploadArticle.module.css";

const UploadArticle = () => {
  return (
    <div className={styles.UploadArticle}>
      <UploadArticleHeader />

      <form className={styles.form}>
        <div>
          <label className={styles.label}>
            *제목
            <input
              // name="name"
              // value={values.name}
              // onChange={handleInputChange}
              className={styles.input}
              placeholder="제목을 입력해주세요"
            />
          </label>
        </div>
        <div>
          <label className={styles.label}>
            *내용
            <textarea
              // name="introduction"
              // value={values.introduction}
              // onChange={handleInputChange}
              className={styles.textarea}
              placeholder="내용을 입력해주세요"
            />
          </label>
        </div>
      </form>

      <FileInput />
    </div>
  );
};

export default UploadArticle;
