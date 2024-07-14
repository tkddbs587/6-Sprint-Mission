import styles from "@/pages/items/Items.module.css";
import BestProducts from "@/components/itemsPage/BestProducts";
import AllProducts from "@/components/itemsPage/AllProducts";

const Items = () => {
  return (
    <div className={styles.Items}>
      <BestProducts />
      <AllProducts />
    </div>
  );
};

export default Items;
