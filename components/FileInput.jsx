import { useState } from "react";
import styles from "./FileInput.module.css";
import Image from "next/image";
import { postFile } from "../api/api";

const FileInput = ({ setValues }) => {
  const [inputValue, setInputValue] = useState("");
  const [preview, setPreview] = useState();
  const [file, setFile] = useState();

  const handleFileChange = async (e) => {
    setInputValue(e.target.value);
    const selectedFile = e.target.files[0];
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);

    const formData = new FormData();
    formData.append("image", selectedFile);
    const fileUrlResponse = await postFile(formData);
    const fileUrlData = await fileUrlResponse.json();

    setValues((prev) => {
      return {
        ...prev,
        image: fileUrlData.url,
      };
    });
  };

  const handlePreviewDelete = () => {
    setFile(null);
    setPreview("");
    setInputValue("");
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
          id="FileInput"
          className={styles.file_input}
          name="image"
          type="file"
          value={inputValue}
          placeholder="이미지 등록"
          onChange={handleFileChange}
        />
        {preview && (
          <div className={styles.preview}>
            <Image
              className={styles.preview_img}
              src={preview}
              width={282}
              height={282}
              alt="미리보기이미지"
            />
            <Image
              onClick={handlePreviewDelete}
              className={styles.x_icon}
              src="/images/ic_X.svg"
              width={24}
              height={24}
              alt="x아이콘"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
