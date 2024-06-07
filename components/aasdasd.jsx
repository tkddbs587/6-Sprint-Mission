import React, { useState } from "react";
import "./FileInput.css";
import Xicon from "../image/icon_X.svg";

const FileInput = () => {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [inputValue, setInputValue] = useState("");

  const handleFileChange = (e) => {
    const fileValue = e.target.files[0];
    const previewURL = URL.createObjectURL(fileValue);
    setFile(fileValue);
    setPreview(previewURL);
    setInputValue(e.target.value);
  };

  const handlePreviewDelete = () => {
    setFile(null);
    setPreview("");
    setInputValue("");
  };

  return (
    <>
      <p className="label_text">상품 이미지</p>
      <div className="file_input_container">
        <label className="file_input_label" htmlFor="FileInput">
          <div className="file_input_plus_text">+</div>
          <div className="file_input_text">이미지 등록</div>
        </label>
        <input
          id="FileInput"
          type="file"
          value={inputValue}
          placeholder="이미지 등록"
          onChange={handleFileChange}
        />
        {preview && (
          <div className="preview">
            <img className="preview_img" src={preview} />
            <img onClick={handlePreviewDelete} className="x_icon" src={Xicon} />
          </div>
        )}
      </div>
    </>
  );
};

export default FileInput;
