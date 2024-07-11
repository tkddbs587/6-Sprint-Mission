import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "@/components/itemsPage/Dropdown.module.css";

const Dropdown = ({
  setOrder,
}: {
  setOrder: Dispatch<SetStateAction<string>>;
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <select className={styles.select} onChange={handleChange}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};

export default Dropdown;
