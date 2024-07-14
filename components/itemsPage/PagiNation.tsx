import React, { MouseEvent } from "react";
import styles from "@/components/itemsPage/PagiNation.module.css";

const PagiNation = ({
  totalPage,
  page,
  setPage,
}: {
  totalPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handlePageClick = (e: MouseEvent<HTMLButtonElement>) => {
    setPage(e.target.value);
  };

  return (
    <div className={styles.PagiNation}>
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          className={styles.button}
          value={index + 1}
          onClick={handlePageClick}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PagiNation;
