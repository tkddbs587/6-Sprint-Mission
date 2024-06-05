import Image from "next/image";
import styles from "./ArticlesHeader.module.css";
import Link from "next/link";
import Dropdown from "./Dropdown";

const ArticlesHeader = ({ setSearch, setOrder }) => {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.ArticlesHeader}>
      <div className={styles.section_top}>
        <div className={styles.text_article}>게시글</div>
        <Link href="/addboard" className={styles.button}>
          글쓰기
        </Link>
      </div>
      <Image
        className={styles.search_icon}
        src="/images/search_icon.svg"
        width={24}
        height={24}
        alt="검색아이콘"
      />
      <div className={styles.section_bottom}>
        <input
          onChange={handleInputChange}
          placeholder="검색할 상품을 입력해주세요"
        />

        <Dropdown setOrder={setOrder} />
      </div>
    </div>
  );
};

export default ArticlesHeader;
