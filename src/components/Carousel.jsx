import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const slides = Array.from({ length: 3 }, (_, index) => {
  const slideNumber = index + 1;
  const paddedNumber = slideNumber.toString().padStart(2, "0");
  return `${paddedNumber}.png`;
});

const Carousel = ({ autoSlide = false, autoSlideInterval = 5000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="max-w-3xl">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img src={slide} key={index} alt={slide} />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white transition duration-300 ease-in-out"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white transition duration-300 ease-in-out"
          >
            <ChevronRight size={40} />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 left-0">
          <div className="flex justify-center items-center gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-gray-400 rounded-full ${
                  curr === i ? "p-3" : "bg-opacity-50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
