const API = "http://localhost:8000/predict";

export const fetchSummary = async (news) => {
  const url = `${API}?text=${encodeURIComponent(news)}`;

  const requestOptions = {
    method: "POST",
  };

  const response = await fetch(url, requestOptions);
  if (!response.ok) throw Error("Failed fetching news");

  const data = await response.json();

  // Extract summary from response
  const { summary } = data;

  return summary;
};
