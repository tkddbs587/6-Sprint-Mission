import Image from "next/image";
import styles from "./ArticlesHeader.module.css";
import Link from "next/link";
import Dropdown from "./Dropdown";

const ArticlesHeader = () => {
  return (
    <div className={styles.ArticlesHeader}>
      <div className={styles.section_top}>
        <div className={styles.text_article}>게시글</div>
        <Link href="" className={styles.button}>
          글쓰기
        </Link>
      </div>
      <div className={styles.section_bottom}>
        <div className={styles.section_input}>
          <Image
            src="/images/search_icon.svg"
            width={24}
            height={24}
            alt="검색아이콘"
          />
          <input
            placeholder="검색할 상품을 입력해주세요"
            // onChange={handleInputChange}
          />
        </div>
        <Dropdown />
      </div>
    </div>
  );
};

export default ArticlesHeader;
