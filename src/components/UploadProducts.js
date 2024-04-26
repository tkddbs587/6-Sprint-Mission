import React from "react";
import Header from "./Header";
import FileInput from "./FileInput";
import "./UploadProducts.css";

const UploadProducts = () => {
  return (
    <div className="UploadProducts">
      <Header />
      <form>
        <FileInput />
        <div className="form">
          <label className="label">
            상품명
            <input className="input" placeholder="상품명을 입력해주세요" />
          </label>

          <label className="label">
            상품 소개
            <textarea
              className="product_introduction_textarea"
              placeholder="상품 소개를 입력해주세요"
            />
          </label>

          <label className="label">
            판매가격
            <input className="input" placeholder="판매가격을 입력해주세요" />
          </label>

          <label className="label">
            태그
            <input className="input" placeholder="태그를 입력해주세요" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default UploadProducts;
