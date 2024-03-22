import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { fetchNews } from "../services/apiFetchNews";
import NewsItem from "../components/NewsItem";
import { formatDate } from "../utils/formatDate";
import { useState } from "react";

const News = () => {
  const newsList = useLoaderData();
  const navigate = useNavigate();
  const { date } = useParams();

  const [searchQuery, setSearchQuery] = useState("");

  const searchedNews =
    searchQuery.length === 0
      ? newsList
      : newsList.filter((news) =>
          `${news.title} ${news.source}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );

  return (
    <>
      <h2 className="text-2xl text-center mb-2 bg-teal-300 rounded-full py-2 w-full">
        📅 News on {formatDate(date)}
      </h2>
      <div className="flex gap-48">
        <ul className="grid grid-cols-2">
          {searchedNews.map((news) => (
            <NewsItem news={news} key={news.index} />
          ))}
        </ul>
        <div className="position-relative">
          <div className="fixed top-1/2 right-10 transform -translate-y-1/2">
            <input
              placeholder="Search News or Sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full px-2 py-2 placeholder:px-2 placeholder:py-2 transition-transform hover:scale-105 active:px-2 active:py-2"
            />
            <Link
              to="/calendar"
              className="text-center text-lg block my-4 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
            >
              📅 Calendar
            </Link>
            <Link
              onClick={() => navigate(-1)}
              className="text-center text-lg block my-4 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
            >
              &larr; Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const loader = async (params) => {
  const { date } = params;
  const news = await fetchNews(date);
  return news;
};

export default News;
