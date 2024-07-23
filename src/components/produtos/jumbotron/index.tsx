import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Content {
  title: string;
  text: string;
  banner: string;
  logo?: string;
  trocaBanner?: boolean;
  bannersTroca?: string[];
  corButtonOne: string;
  corButtonTwo?: string;
  corButtonThree?: string;
  textButtonOne: string;
  linkButtonOne: string;
  textButtonTwo: string;
  linkButtonTwo: string;
}

export default function JumboTron({
  title,
  text,
  banner,
  logo,
  trocaBanner = false,
  bannersTroca = [],
  corButtonOne,
  corButtonTwo,
  corButtonThree,
  textButtonOne,
  linkButtonOne,
  textButtonTwo,
  linkButtonTwo,
}: Content) {
  const [hovered, setHovered] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(banner);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (trocaBanner && bannersTroca.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannersTroca.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [trocaBanner, bannersTroca]);

  useEffect(() => {
    if (trocaBanner && bannersTroca.length > 0) {
      setCurrentBanner(bannersTroca[currentIndex]);
    }
  }, [currentIndex, trocaBanner, bannersTroca]);

  const buttonStyle = {
    background: `linear-gradient(to right, ${corButtonOne} 0%, ${corButtonTwo ? corButtonTwo : corButtonOne
      } 100%)`,
    backgroundSize: "200% 100%",
    transition: "0.1s ease",
    cursor: "pointer",
    backgroundPosition: hovered ? "70% 100%" : "0% 100%",
  };

  if (!corButtonTwo && corButtonThree && hovered) {
    buttonStyle.background = `linear-gradient(to right, ${corButtonOne} 0%, ${corButtonThree ? corButtonThree : corButtonOne
      } 100%)`;
  }

  return (
    <section
      style={{ backgroundImage: `url(${currentBanner})` }}
      className={`md:bg-center bg-[70%] bg-cover xl:h-[120vh] lg:h-[120vh] md:h-screen w-full pb-0 bg-no-repeat bg-[#bfbfbf] bg-blend-multiply`}
    >
      <div className="w-full py-20 h-full bg-[#000000a0]">
        <div className="px-4 flex flex-col items-center justify-center h-full w-full text-center lg:py-56">
          {logo && (
            <Image
              className={`md:w-[500px] xl:w-[500px] lg:w-80 transition-transform ${"animated-state-Jumbotron "} pb-5 w-[200px] md:pb-14`}
              width={100}
              height={100}
              src={`${logo}`}
              alt="Logo do produto UX"
            />
          )}
          <h1
            style={{ lineHeight: "120%" }}
            className={`mb-4 md:w-[70%] w-[95%] leading-snug xl:text-5xl text-[2rem] md:text-3xl transition-transform ${"animated-state-Jumbotron-two"} font-extrabold tracking-tight text-white md:text-5xl lg:text-4xl`}
          >
            {title}
          </h1>

          <p
            className={`mb-8 text-white md:w-4/5 w-[95%] xl:w-4/5 lg:w-full transition-transform ${"animated-state-Jumbotron-two"} sm:px-16 lg:px-52`}
          >
            {text}
          </p>
          <div
            className={`flex w-full items-center flex-col gap-0 md:gap-5 transition-transform ${"animated-state-Jumbotron-two"} space-y-4 sm:flex-row sm:justify-center sm:space-y-0`}
          >
            <Link className="w-[95%] xl:w-[200px] lg:w-[180px]" href={linkButtonOne}>
              <button
                className={`w-full xl:w-[200px] lg:w-[180px] xl:text-[0.9rem] lg:text-xs h-12 rounded-lg transition-all hover:font-semibold`}
              >
                {textButtonOne}
              </button>
            </Link>

            <Link className="w-[95%] xl:w-[200px] xl:text-[0.9rem] lg:w-[180px]" href={linkButtonTwo}>
              <button
                className={`w-full h-12 rounded-lg text-white hover:font-semibold transition-all`}
                style={buttonStyle}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {textButtonTwo}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
