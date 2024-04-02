import { useState, useEffect } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import packegeImage from "@/assets/logistica/cdsImages/package.svg"

interface Content {
  title: string;
  image: string;
}

interface ContentSection {
  content: Content[];
}

function CarroselImageMobile({ content }: ContentSection) {
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
            <h1 className="text-3xl text-black font-bold mb-2">
              Inove, Controle e Venda Mais
            </h1>
            <p className="text-black">
              Adapte-se às mudanças do mercado com facilidade. Nossas soluções
              de tecnologia modulares oferecem flexibilidade, informação e
              eficiência para a gestão de fretes, gestão de transportes e
              comunicação das suas vendas digitais. Conheça nossas soluções!
            </p>
          </div>

          <div className="flex justify-center flex-col items-center mb-8">
            <div
              style={{ boxShadow: "rgba(0, 0, 0, 0.3) 2px 4px 12px 0px" }}
              className="z-20 w-full flex items-center rounded-t-[16px] bg-black justify-center h-20"
            >
              <ol className="flex justify-center w-full">
                {content.map((item, index) => (
                  <li
                    key={index}
                    className={`flex w-full justify-center transition-all transition-duration[4s] items-center h-1 ${
                      index <= contentIndex
                        ? "bg-[#FBC709]  h-1"
                        : "bg-[#fff] "
                    } `}
                    onClick={() => handleStepClick(index)}
                  >
                    <span
                      className={`flex items-center justify-center w-14 h-14 rounded-full ${
                        index <= contentIndex ? "bg-[#FBC709]" : "bg-white "
                      }`}
                    >
                      <Image alt="Logística sustentavel" width={30} height={30} src={packegeImage} />
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div
              style={{
                borderRadius: "0px 0px 16px 16px",
                backgroundImage: `url(${content[contentIndex].image})`,
              }}
              className="flex items-center justify-center bg-[#5F5F5F] h-[400px] transition-all w-full  bg-cover bg-no-repeat flex-col md:flex-row"
            >
              <div className="flex items-center justify-center w-full rounded-2xl h-full bg-[#0000007a]">
                <h1
                  className={`text-white transition-transform ${
                    contentIndex === 0
                      ? "animated-state-Banner"
                      : "animated-state-BannerTwo"
                  } ${
                    contentIndex === 1
                      ? "animated-state-BannerTwo"
                      : "animated-state-Banner"
                  }  `}
                >
                  {content[contentIndex].title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarroselImageMobile;
