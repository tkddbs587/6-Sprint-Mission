import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import styles from "./FileInput.module.css";
import Image from "next/image";
import { postFile } from "../api/api";

const FileInput = ({
  setValues,
}: {
  setValues: Dispatch<
    SetStateAction<{
      title: string;
      content: string;
      image: undefined;
    }>
  >;
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [preview, setPreview] = useState<string>();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setInputValue(e.target.value);
    const selectedFile = e.target.files[0];
    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);

    const formData = new FormData();
    formData.append("image", selectedFile);
    // formData.get("image") 폼 데이터 안에 내용이 잘 저장되었는지 확인하는 메서드
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
    setValues((prev) => ({
      ...prev,
      image: undefined,
    }));
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
