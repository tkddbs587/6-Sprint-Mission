import React, { useEffect, useState } from "react";

import ProductCard from "@/components/itemsPage/ProductCard";
import AllProductsHeader from "@/components/itemsPage/AllProductsHeader";
import styles from "@/components/itemsPage/AllProducts.module.css";
import PagiNation from "@/components/itemsPage/PagiNation";
import Product from "@/types/product";
import getProductsData, { PAGE_SIZE } from "@/api/products";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("recent");

  useEffect(() => {
    async function fetchData() {
      const data = await getProductsData({
        page: page,
        orderBy: order,
        keyword: search,
      });
      setProducts(data.list);
      setTotalPage(Math.ceil(data.totalCount / PAGE_SIZE));
    }

    fetchData();
  }, [page, order, search]);

  if (!products) return null;

  return (
    <div>
      <AllProductsHeader
        setOrder={setOrder}
        // products={products}
        setSearch={setSearch}
      />
      <div className={styles.products}>
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <PagiNation totalPage={totalPage} page={page} setPage={setPage} />
    </div>
  );
};

export default AllProducts;
