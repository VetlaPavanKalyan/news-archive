import { Link, useParams } from "react-router-dom";
import formatDateTime from "../utils/formatDateTime";

const getSource = (news) => {
  if (news.source)
    return {
      source: news.source,
      sourceLink: news.source.replace(/\s+/g, "_"),
    };

  const parts = news.title.split("-");
  const source =
    parts.length > 1 ? parts[parts.length - 1].trim() : "Unknown Source";

  return { source, sourceLink: source.replace(/\s+/g, "_") };
};

const NewsItem = ({ news }) => {
  const { date } = useParams();

  const { source, sourceLink } = getSource(news);

  return (
    <li className="my-5 mx-10 bg-yellow-300 px-6 py-3 rounded-xl transition-transform transform hover:scale-105 flex flex-col justify-between gap-2">
      <div className="flex flex-col justify-between gap-2">
        <h1
          className="text-lg bg-yellow-200 rounded-lg px-5 py-1 border-stone-400 text-center"
          style={{ fontFamily: "PT Sans" }}
        >
          {news.title}
        </h1>
        <span
          className="bg-yellow-200 rounded-lg px-5 py-1 border-stone-400 text-center"
          style={{ fontFamily: "PT Sans" }}
        >
          🕒 {formatDateTime(news.pubDate)}
        </span>
      </div>
      <div className="flex justify-between gap-5">
        <a
          href={`https://en.wikipedia.org/wiki/${sourceLink}`}
          target="__blank"
          className="bg-yellow-200 rounded-lg px-5 py-1 border-stone-400"
          style={{ fontFamily: "PT Sans" }}
        >
          📰 {source}
        </a>
        <a
          href={news.link}
          target="__blank"
          className="bg-yellow-200 rounded-lg px-5 py-1 border-stone-400"
          style={{ fontFamily: "PT Sans" }}
        >
          🔗 Link
        </a>
        <Link
          to={`/summary/${date}/${news.index}`}
          className="bg-yellow-200 rounded-lg px-5 py-1 border-stone-400"
          style={{ fontFamily: "PT Sans" }}
        >
          🤖 Summarize
        </Link>
      </div>
    </li>
  );
};

export default NewsItem;
