const API = "https://news-y9p5.onrender.com/news";

export const fetchNews = async (date) => {
  const URL = `${API}/get/${date}`;

  const res = await fetch(URL);

  if (!res.ok) throw Error("Failed fetching news");

  const data = await res.json();

  const news = await data[0].data;

  return news;
};
