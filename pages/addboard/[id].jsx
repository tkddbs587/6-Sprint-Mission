import Button from "../../components/Button";
import styles from "./[id].module.css";

const Addboard = () => {
  return (
    <>
      <div className={styles.Addboard}>
        <div className={styles.form}>
          <div className={styles.label}>댓글 달기</div>
          <textarea
            name="content"
            // value={values.textarea}
            // onChange={handleInputChange}
            className={styles.textarea}
            placeholder="내용을 입력해주세요"
          />

          <div className={styles.button}>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Addboard;
