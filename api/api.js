const BASE_URL = process.env.NEXT_PUBLIC_API;
export const RECENT = "recent";

export async function getArticlesData({
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

export async function getArticle(id) {
  const res = await fetch(`${BASE_URL}/articles/${id}`);
  const data = await res.json();

  return data;
}

export async function getArticleComments({ articleId, limit }) {
  try {
    const res = await fetch(
      `${BASE_URL}/articles/${articleId}/comments?limit=${limit}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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

export async function postFile(file) {
  const accessToken = await getAccessToken();

  const res = await fetch(`${BASE_URL}/images/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: file,
  });
  return res;
}

export async function postArticleComment({ articleId, content }) {
  const accessToken = await getAccessToken();
  const res = await fetch(`${BASE_URL}/articles/${articleId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ content }),
  });
  return res;
}

export async function getAccessToken() {
  const res = await fetch(`${BASE_URL}/auth/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "weworkhi@email.com",
      password: "password",
    }),
  });
  const data = await res.json();
  const accessToken = data.accessToken;
  return accessToken;
}
