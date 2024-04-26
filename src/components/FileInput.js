import React, { useEffect, useState } from "react";
import "./FileInput.css";

const FileInput = () => {
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const previewImg = e.target.files[0];
    setPreview(previewImg);
  };

  return (
    <>
      <p className="label_text">상품 이미지</p>
      <label className="file_input_label" htmlFor="FileInput">
        <div className="file_input_plus_text">+</div>
        <div className="file_input_text">이미지 등록</div>
      </label>
      <input
        id="FileInput"
        type="file"
        placeholder="이미지 등록"
        onChange={handleChange}
      />
      {/* <img src={preview} alt="이미지 미리보기" /> */}
    </>
  );
};

export default FileInput;
