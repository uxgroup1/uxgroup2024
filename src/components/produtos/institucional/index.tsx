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
  id?: string;
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
  id,
}: Content) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    background: `linear-gradient(to right, ${corButtonOne} 0%, ${
      corButtonTwo ? corButtonTwo : corButtonOne
    } 100%)`,
    backgroundSize: "200% 100%",
    transition: " 0.1s ease",
    cursor: "pointer",
    backgroundPosition: hovered ? "70% 100%" : "0% 100%",
  };

  if (!corButtonTwo && corButtonThree && hovered) {
    buttonStyle.background = `linear-gradient(to right, ${corButtonOne} 0%, ${
      corButtonThree ? corButtonThree : corButtonOne
    } 100%)`;
  }

  return (
    <section
      id={id}
      className="bg-white max-w-[1996px] w-full xl:h-[100vh] lg:h-[80vh]"
    >
      <div className="relative h-full flex">
        <div className="h-full lg:w-1/3"></div>
        <div className="hidden w-3/4 rounded-2xl  bg-gray-100 xl:h-full  lg:block"></div>

        <div className="w-[90%] flex items-center flex-col justify-center h-full lg:px-0  lg:py-10 mx-auto lg:absolute lg:inset-x-0">
          <div className="lg:flex gap-20 lg:items-center">
            <Image
              src={banner}
              className="w-full xl:w-[60%] lg:w-[30rem] rounded-2xl shadow-2xl"
              width={100}
              height={100}
              alt="ESG"
            />

            <div className="flex flex-col gap-5 mt-8 lg:mt-0">
              <h1 className="text-black xl:text-3xl lg:text-xl lg:w-[90%]">
                {title}
              </h1>

              <p className="lg:w-4/5 w-full  text-black">{text}</p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href={linkButtonOne}>
                  <button
                    className={`xl:w-[170px] lg:w-[150px] xl:text-[0.9rem] lg:text-xs w-full h-10 rounded-lg text-white hover:font-semibold transition-all`}
                    style={buttonStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {textButtonOne}
                  </button>
                </Link>

                <Link href={linkButtonTwo}>
                  <button className="xl:w-[170px] lg:w-[150px] xl:text-[0.9rem] lg:text-xs border w-full h-10 rounded-lg text-black hover:font-semibold transition-all">
                    {textButtonTwo}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
