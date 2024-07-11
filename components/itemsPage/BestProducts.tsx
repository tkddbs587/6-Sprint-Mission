import React, { useEffect, useState } from "react";
import styles from "@/components/itemsPage/BestProducts.module.css";
import ProductCard from "@/components/itemsPage/ProductCard";

import Product from "@/types/product";
import getProductsData from "@/api/products";

const BestProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  console.log(products);

  useEffect(() => {
    async function fetchData() {
      const data = await getProductsData({
        pageSize: 4,
        orderBy: "favorite",
      });
      setProducts(data.list);
    }

    fetchData();
  }, []);

  if (!products) return null;

  return (
    <div className={styles.BestProducts}>
      <div className={styles.best_item}>베스트 상품</div>
      <div className={styles.products_list}>
        {products.map((item: Product) => (
          <ProductCard item={item} key={item.id} bestSize={true} />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
