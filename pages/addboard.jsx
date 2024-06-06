import React from "react";
import UploadArticle from "../components/UploadArticle";

const addboard = () => {
  return (
    <>
      <UploadArticle />
    </>
  );
};

export default addboard;

// <div className={styles.UploadProducts}>
//   <Header handleButtonSubmit={handleButtonSubmit} />
//   <form>
//     <FileInput />
//     <div className={styles.form}>
//       <label className={styles.label}>
//         상품명
//         <input
//           name="name"
//           value={values.name}
//           onChange={handleInputChange}
//           className={styles.input}
//           placeholder="상품명을 입력해주세요"
//         />
//       </label>

//       <label className={styles.label}>
//         상품 소개
//         <textarea
//           name="introduction"
//           value={values.introduction}
//           onChange={handleInputChange}
//           className={styles.product_introduction_textarea}
//           placeholder="상품 소개를 입력해주세요"
//         />
//       </label>

//       <label className={styles.label}>
//         판매가격
//         <input
//           name="price"
//           value={values.price}
//           onChange={handleInputChange}
//           className={styles.input}
//           placeholder="판매가격을 입력해주세요"
//         />
//       </label>

//       <label className={styles.label}>
//         태그
//         <input
//           name="tag"
//           value={values.tag}
//           onChange={handleInputChange}
//           className={styles.input}
//           placeholder="태그를 입력해주세요"
//         />
//       </label>
//     </div>
//   </form>
// </div>
