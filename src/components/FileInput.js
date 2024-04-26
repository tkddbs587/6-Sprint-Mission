import React from "react";
import "./FileInput.css";

const FileInput = () => {
  return (
    <>
      <p className="label_text">상품 이미지</p>
      <label className="file_input_label" htmlFor="FileInput">
        <div className="file_input_plus_text">+</div>
        <div className="file_input_text">이미지 등록</div>
      </label>
      <input id="FileInput" type="file" placeholder="이미지 등록" />
    </>
  );
};

export default FileInput;
