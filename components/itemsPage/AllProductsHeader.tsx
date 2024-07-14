import Dropdown from "@/components/itemsPage/Dropdown";
import styles from "@/components/itemsPage/AllProductsHeader.module.css";

import Link from "next/link";
import Image from "next/image";
import { ChangeEvent } from "react";

const AllProductsHeader = ({
  setOrder,
  setSearch,
}: {
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.AllProductsHeader}>
      <div className={styles.all_item}>전체 상품</div>
      <div className={styles.editor}>
        <Image
          className={styles.search_icon}
          src="images/search_Icon.svg"
          width={24}
          height={24}
          alt="검색아이콘"
        />
        <input
          className={styles.input}
          placeholder="검색할 상품을 입력해주세요"
          onChange={handleInputChange}
        />
        <Link href="/additem" className={styles.button}>
          상품 등록하기
        </Link>
        <Dropdown setOrder={setOrder} />
        {/* <img
          className={styles.dropdown_mobile}
          src={dropdownMobile}
          alt="모바일드롭다운버튼"
        /> */}
      </div>
    </div>
  );
};

export default AllProductsHeader;
