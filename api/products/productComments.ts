import axios from "@/lib/axios";
const limit = 5;

const getProductComments = async (productId: number) => {
  const res = await axios.get(`products/${productId}/comments?limit=${limit}`);
  return res.data;
};

export default getProductComments;
