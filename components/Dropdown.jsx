import styles from "./Dropdown.module.css";

const Dropdown = ({ setOrder }) => {
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  return (
    <div>
      <select onChange={handleOrderChange} className={styles.select}>
        <option value="recent">최신순</option>
        <option value="like">좋아요순</option>
      </select>
    </div>
  );
};

export default Dropdown;
