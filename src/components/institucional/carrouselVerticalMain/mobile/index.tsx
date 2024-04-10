import { useState, useEffect } from "react";
import style from "./style.module.scss";
import imageCarroselVerticalOne from "@/assets/fusion/fusionBanner.png";
import imageCarroselVerticalTwo from "@/assets/trux/tms-transp.png";
import imageCarroselVerticalThree from "@/assets/ondetah/ondetah.png";
import imageCarroselVerticalFour from "@/assets/consultoria/consultoria.png";
import Link from "next/link";
import Image from "next/image";

interface Content {
  title: string;
  contentTitle: string;
  contentText: string;
  banner: string;
  logo?: string;
  icon?: string;
  link?: string;
  corBarra?: string;
}

interface ContentProduct {
  content: Content[];
  title: string;
  sub: string;
}

function CarroselVerticalMobile({ content, title, sub }: ContentProduct) {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleStepClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <section className={style.Section}>
      <div className="container bg mx-auto px-5">
        <div className="bg-white ">
          <div className="mb-8">
            <h1 className="text-3xl text-black font-bold mb-2">{title}</h1>
            <p className="text-black">{sub}</p>
          </div>

          <div className="flex justify-center flex-col items-center mb-8">
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 2px 4px 12px 0px" }}
              className="z-20 w-full flex items-center rounded-t-[16px] bg-white justify-center h-20"
            >
              <ol className="flex justify-center w-full">
                {content.map((item, index) => (
                  <li
                    key={index}
                    className={`flex w-full justify-center transition-all transition-duration[4s] items-center h-1 ${
                      index <= contentIndex
                        ? "text-blue-600 bg-[#bfbfbf]  h-1"
                        : "bg-[#fff] "
                    } `}
                    onClick={() => handleStepClick(index)}
                  >
                    <span
                      className={`flex items-center justify-center w-14 h-14 rounded-2xl ${
                        index <= contentIndex
                          ? " border-2 border-[#bfbfbf] bg-white "
                          : "shadow-2xl"
                      } `}
                    >
                      <Image
                        className="w-[50%]"
                        src={`${item.icon}`}
                        width={100}
                        height={100}
                        alt="Gestão"
                      ></Image>
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div
              style={{
                borderRadius: "0px 0px 16px 16px",
                backgroundImage: `url(${content[contentIndex].banner})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="flex h-[500px] flex-col md:flex-row"
            >
              <div className="w-full h-full bg-[#0000009b] rounded-b-2xl">
                <div className="w-full flex flex-col justify-center h-full px-[50px] pb-[60px] pt-[60px]">
                  <Image
                  className="w-4/5 pb-5"
                    src={`${content[contentIndex].logo}`}
                    width={100}
                    height={1000}
                    alt=""
                  />
                  <h1 className="text-2xl text-white font-bold mb-4">
                    {content[contentIndex].contentTitle}
                  </h1>
                  <p className="text-white">
                    {content[contentIndex].contentText}
                  </p>
                  <Link href={`${content[contentIndex].link}`}>
                    <button className={style.Button}>conheça a solução</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarroselVerticalMobile;
