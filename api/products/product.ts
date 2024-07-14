import axios from "@/lib/axios";

const getProduct = async (productId: number) => {
  const res = await axios.get(`products/${productId}`);
  return res.data;
};

export default getProduct;
