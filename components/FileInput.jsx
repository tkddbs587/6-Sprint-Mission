import { useState } from "react";
import styles from "./FileInput.module.css";

const FileInput = ({ setValues }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFileChange = (e) => {
    setInputValue(e.target.value);
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setValues((prev) => {
      return {
        ...prev,
        image: fileUrl,
      };
    });
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <p className={styles.label_text}>이미지</p>
      <div className={styles.file_input_container}>
        <label className={styles.file_input_label} htmlFor="FileInput">
          <div className={styles.file_input_plus_text}>+</div>
          <div className={styles.file_input_text}>이미지 등록</div>
        </label>
        <input
          id={styles.FileInput}
          name="image"
          type="file"
          value={inputValue}
          placeholder="이미지 등록"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
