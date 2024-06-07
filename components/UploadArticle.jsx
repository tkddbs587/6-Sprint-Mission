import { useState } from "react";
import UploadArticleHeader from "./UploadArticleHeader";
import FileInput from "./FileInput";
import styles from "./UploadArticle.module.css";
import { postArticle } from "../api/api";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const UploadArticle = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    title: "",
    content: "",
    image: undefined,
  });

  const { title, content } = values;

  const isButtonDisabled = (title && content) === "" ? true : false;

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postArticle(values)
      .then((res) => res.json())
      .then((data) => data.id && router.push(`/addboard/${data.id}`));
  };

  return (
    <div className={styles.UploadArticle}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <UploadArticleHeader isButtonDisabled={isButtonDisabled} />
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
