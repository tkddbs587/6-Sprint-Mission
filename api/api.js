const BASE_URL = "https://panda-market-api.vercel.app";
export const RECENT = "recent";

export default async function getArticlesData({
  page = 1,
  pageSize = 10,
  orderBy = RECENT,
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(`${BASE_URL}/articles?${query}`);
  const data = await res.json();

  return data;
}

export async function postArticle(values) {
  const accessToken = await getAccessToken();
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(values),
  });
  return res;
}

export async function getAccessToken() {
  const res = await fetch(`${BASE_URL}/auth/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "example@email.com", password: "password" }),
  });
  const data = await res.json();
  const accessToken = data.accessToken;
  return accessToken;
}
