import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Content {
  title: string;
  text: string;
  banner: string;
  corButtonOne: string;
  corButtonTwo?: string;
  corButtonThree?: string;
  textButtonOne: string;
  linkButtonOne: string;
  textButtonTwo: string;
  linkButtonTwo: string;
}

export default function ProductInstitutional({
  title,
  text,
  banner,
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
    <section className="bg-white max-w-[1996px] w-full lg:h-[80vh]">
      <div className="relative h-full flex">
        <div className="h-full lg:w-1/3"></div>
        <div className="hidden w-3/4 rounded-2xl  bg-gray-100 h-full lg:block"></div>

        <div className="w-[90%] flex flex-col justify-center h-full lg:px-0  lg:py-10 mx-auto lg:absolute lg:inset-x-0">
          <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
            <Image
              className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
              src={banner}
              width={100}
              height={100}
              alt=""
            />

            <div className="flex flex-col gap-5 mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-black ">
                Help us improve our productivity
                {title}
              </h1>

              <p className="max-w-lg text-black">
                {text}“ Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Tempore quibusdam ducimus libero ad tempora doloribus
                expedita laborum saepe voluptas perferendis delectus assumenda
                rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
              </p>
              <div className="flex lg:flex-row flex-col items-center gap-5">
                <button
                  className={`lg:w-[170px] w-full  h-10 rounded-lg text-white hover:font-semibold transition-all`}
                  style={buttonStyle}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <Link href={linkButtonTwo}>
                    {textButtonOne}
                    E-commerce
                  </Link>
                </button>
                <button className="lg:w-[170px] border w-full  h-10 rounded-lg text-black hover:font-semibold transition-all">
                  <Link href={linkButtonOne}> Marketplace {textButtonTwo}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
