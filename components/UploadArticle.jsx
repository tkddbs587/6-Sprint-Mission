import { useState } from "react";
import UploadArticleHeader from "./UploadArticleHeader";
import FileInput from "./FileInput";
import styles from "./UploadArticle.module.css";

const UploadArticle = () => {
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: "",
  });

  const { title, content } = values;

  const handleButtonSubmit = (title && content) === "" ? true : false;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChangeInput(name, value);
  };

  const onChangeInput = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.UploadArticle}>
      <UploadArticleHeader handleButtonSubmit={handleButtonSubmit} />

      <form className={styles.form}>
        <div>
          <label className={styles.label}>
            *제목
            <input
              name="title"
              value={values.input}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="제목을 입력해주세요"
            />
          </label>
        </div>
        <div>
          <label className={styles.label}>
            *내용
            <textarea
              name="content"
              value={values.textarea}
              onChange={handleInputChange}
              className={styles.textarea}
              placeholder="내용을 입력해주세요"
            />
          </label>
        </div>
      </form>

      <FileInput setValues={setValues} />
    </div>
  );
};

export default UploadArticle;
