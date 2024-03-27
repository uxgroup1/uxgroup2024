import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Content {
  title: string;
  text: string;
  banner: string;
  logo: string;
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
  corButtonOne,
  corButtonTwo,
  corButtonThree,
  textButtonOne,
  textButtonTwo,
  linkButtonOne,
  linkButtonTwo,
}: Content) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    background: `linear-gradient(to right, ${corButtonOne} 0%, ${
      corButtonTwo ? corButtonTwo : corButtonOne
    } 100%)`,
    backgroundSize: "200% 100%",
    transition: " 0.1s ease",
    cursor: "pointer",
    backgroundPosition: hovered ? "70% 100%" : "0% 100%", // Definido inicialmente para a cor 3 caso o hover seja ativado
  };

  if (!corButtonTwo && corButtonThree && hovered) {
    buttonStyle.background = `linear-gradient(to right, ${corButtonOne} 0%, ${
      corButtonThree ? corButtonThree : corButtonOne
    } 100%)`;
  }

  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className={`md:bg-center bg-[70%] bg-cover h-screen w-full pb-0 bg-no-repeat bg-[#bfbfbf] bg-blend-multiply`}
    >
      <div className="w-full h-full bg-[#000000a0]">
        <div className="px-4  flex flex-col items-center justify-center h-full w-full text-center  lg:py-56">
          <Image
            className={`md:w-[500px] transition-transform ${"animated-state-Jumbotron "} pb-5 w-[200px] md:pb-14`}
            width={0}
            height={0}
            src={logo}
            alt="Logo do produto UX"
          />
          <h1
            className={`mb-4 w-4/5 leading-snug text-3xl transition-transform ${"animated-state-Jumbotron-two"} font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl`}
          >
            {title}
          </h1>
          <p
            className={`mb-8 text-sm text-white w-4/5 transition-transform ${"animated-state-Jumbotron-two"} sm:px-16 lg:px-52`}
          >
            {text}
          </p>
          <div
            className={`flex flex-col gap-0 md:gap-5 transition-transform ${"animated-state-Jumbotron-two"} space-y-4 sm:flex-row sm:justify-center sm:space-y-0`}
          >
            <button
              className={`w-[200px] h-10 rounded-lg transition-all hover:font-semibold`}
            >
              <Link href={linkButtonOne}>{textButtonOne}</Link>
            </button>
            <button
              className={`md:w-[170px] h-10 rounded-lg text-white hover:font-semibold transition-all`}
              style={buttonStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link href={linkButtonTwo}>{textButtonTwo}</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
