import styles from "./FileInput.module.css";

const FileInput = () => {
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
          type="file"
          // value={inputValue}
          placeholder="이미지 등록"
          // onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default FileInput;
