import React, { useEffect, useRef, useState } from "react";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 5000;

const Slideshow = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      title: "Blast l'un des plus beaux films de la saison 2022",
      description: "",
      coverPicture:
        "https://i.ytimg.com/vi/ag-68VCscM0/maxresdefault.jpg",
        href:"#"
    },
    {
      id: 2,
      title: "Les 19 films de 2018 que nous ne voulons pas manquer !",
      description: "les films télé de netflix ont changé notre qutotidien .",
      coverPicture:
        "https://j4s9n9z3.rocketcdn.me/wp-content/uploads/2018/01/Films-de-2018-840x400.jpg",
        href:"#"
    },
    {
      id: 3,
      title: "So busy girls",
      description: "meilleur films d'animation de l'année de l'anné 2022",
      coverPicture:
        "https://static.hitek.fr/img/actualite/ill_m/1362773643/theseabeast.png",
        href:"#"
    },
  ]);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="w-[100%] overflow-hidden m-0 relative">
      <div className="opacity-80 bg-black absolute top-0 left-0 right-0 bottom-0"></div>
      <div
        className="whitespace-nowrap"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div className="inline-block h-[500px] w-full" key={index}>
            <img
              src={slide.coverPicture}
              className="w-full object-cover opacity-50"
            />
            <div className="block w-full mx-auto">
              <div className="absolute top-[20%] sm:text-center lg:text-center w-full">
                <h1 className="mx-auto w-[800px] truncate text-6xl font-extrabold text-center text-white">
                  <span className="block xl:inline">{slide.title}</span>
                </h1>
                <div className="mx-auto text-center w-[800px] truncate text-3xl text-white mt-5">
                  {slide.description}
                </div>
                <div className="flex item-center justify-center sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                  <div className="block rounded-full text-white bg-green-600 hover:bg-green-700">
                    {/* <a
                      href={`/posts/${slide._id}`}
                      className="flex items-center justify-center px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10 text-center"
                    >
                      Voir à l'article
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-10 bottom-10 w-full text-center flex justify-center items-center space-x-2 rounded-md cursor-pointer">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-[20px] w-[20px] rounded-full ${
              index === idx ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow ;