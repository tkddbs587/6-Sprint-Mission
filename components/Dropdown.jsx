import styles from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <div>
      <select className={styles.select}>
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};

export default Dropdown;
