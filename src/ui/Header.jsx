import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-sky-500 text-7xl text-center text-teal-50 h-32 z-10 font-semi-bold flex justify-center items-center">
      <Link to="/" className="transition-transform hover:scale-105">📰 News Summarization Archive</Link>
    </header>
  );
};

export default Header;
