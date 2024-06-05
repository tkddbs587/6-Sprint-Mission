const BASE_URL = "https://panda-market-api.vercel.app/articles";
export const RECENT = "recent";

export default async function getArticlesData({
  page = 1,
  pageSize = 10,
  orderBy = RECENT,
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(`${BASE_URL}?${query}`);
  const data = await res.json();

  return data;
}
