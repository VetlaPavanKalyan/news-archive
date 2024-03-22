import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Marquee
        pauseOnHover={true}
        className="max-w-fit transition-transform transform hover:scale-105"
        style={{ overflow: "hidden" }}
      >
        <h1
          className="text-7xl mt-10 text-slate-800"
          style={{ fontFamily: "Poppins" }}
        >
          Every Page is a Time Capsule
        </h1>
        <div></div>
      </Marquee>
      <h1
        className="text-6xl my-10 text-slate-800"
        style={{ fontFamily: "Calligraffitti" }}
      >
        <span>↻</span> Rewind ,
      </h1>
      <h1
        className="text-6xl my-10 text-slate-800"
        style={{ fontFamily: "Calligraffitti" }}
      >
        <span>▶</span> Replay &
      </h1>
      <h1
        className="text-6xl my-10 text-slate-800"
        style={{ fontFamily: "Calligraffitti" }}
      >
        <span>🤞</span> Remember .
      </h1>
      <Carousel autoSlide={true} autoSlideInterval={3000} />
      <h1 className="text-3xl mt-5 text-slate-800">
        Welcome to News Summarization Archive
      </h1>
      <Link
        to="/calendar"
        className="text-center text-xl block my-4 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg"
      >
        Let&apos;s get Started
      </Link>
    </div>
  );
};

export default Home;
