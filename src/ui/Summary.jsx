import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { fetchNews } from "../services/apiFetchNews";
import { fetchSummary } from "../services/apiFetchSummary";
import { formatDate } from "../utils/formatDate";

const Summary = () => {
  const {
    title: headline,
    news_summary: summary,
    link: url,
    source,
  } = useLoaderData();

  const { date } = useParams();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl text-center mb-2 bg-teal-300 rounded-full w-full py-2">
        News Headline : {headline}
      </h2>
      <p
        className="my-2 mx-10 bg-yellow-300 px-6 py-3 rounded-xl text-lg  border-stone-400 text-center"
        style={{ fontFamily: "PT Sans" }}
      >
        Summary 🧾 :
        <br />
        {summary}
      </p>
      <div className="flex justify-center items-center gap-5">
        <Link
          onClick={() => navigate(-1)}
          className="text-center text-lg block my-2 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
        >
          &larr; Back
        </Link>
        <Link
          to="/calendar"
          className="text-center text-lg block my-2 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
        >
          📅 Calendar
        </Link>
        <a
          href={`https://en.wikipedia.org/wiki/${source}`}
          target="__blank"
          className="text-center text-lg block my-2 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
          style={{ fontFamily: "PT Sans" }}
        >
          📰 Source : {source}
        </a>
        <a
          href={url}
          target="__blank"
          className="text-center text-lg block my-2 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
          style={{ fontFamily: "PT Sans" }}
        >
          🔗 Article Link
        </a>
        <span className="text-center text-lg block my-2 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg">
          🕗 {formatDate(date)}
        </span>
      </div>
    </div>
  );
};

export const loader = async (params) => {
  const { date, index } = params;
  const news = await fetchNews(date);
  const { summary, title, link, source } = news[index];
  const news_summary = await fetchSummary(summary);
  return { title, news_summary, link, source };
};

export default Summary;
