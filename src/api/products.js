const BASE_URL = "https://panda-market-api.vercel.app/products";
export const PAGE_SIZE = 12;

export default async function getProductsData({
  page = 1,
  pageSize = PAGE_SIZE,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(`${BASE_URL}?${query}`);
  const data = await res.json();
  // console.log(data);

  return data;
}
