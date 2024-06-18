const BASE_URL = process.env.NEXT_PUBLIC_API;

const RECENT = "recent";
export const PAGE_SIZE = 10;

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
      `${BASE_URL}/articles/${articleId}/comments?limit=${limit}`,
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postArticle(values) {
  const accessToken = localStorage.getItem("accessToken");

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
  const accessToken = localStorage.getItem("accessToken");

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
  const accessToken = localStorage.getItem("accessToken");

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

export async function signUpUser(formValues) {
  const res = await fetch(`${BASE_URL}/auth/signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await res.json();
  return data.user?.id;
}

export async function signInUser({ email, password }) {
  const res = await fetch(`${BASE_URL}/auth/signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await res.json();

  const accessToken = data.accessToken;
  const refreshToken = data.refreshToken;
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);

  return data.user?.id;
}

export async function deleteComment(commentId) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const res = await fetch(`${BASE_URL}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res.ok) {
      return true;
    } else {
      const failData = await res.json();
      throw new Error(failData.message);
    }
  } catch (err) {
    window.alert(err.message);
  }
}

export async function patchComment({ targetId, newContent }) {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const res = await fetch(`${BASE_URL}/comments/${targetId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newContent,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    window.alert(err.message);
  }
}

// export async function postRefreshToken() {
//   const refreshToken = localStorage.getItem("refreshToken");

//   const res = fetch(`${BASE_URL}/auth/refresh-token`, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${refreshToken}`,
//       "Content-Type": "application/json",
//     },
//   });

//   if (res.ok) {
//     const data = res.json();
//     localStorage.setItem("accessToken", data.accessToken);
//     localStorage.setItem("refreshToken", data.refreshToken);
//     return data.accessToken;
//   } else {
//     throw new Error("토큰을 새로 받아오지 못했습니다");
//   }
// }
