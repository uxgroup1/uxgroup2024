import { useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface Content {
  title: string;
  contentTitle: string;
  contentText: string;
  banner: string;
  logo?: string;
  link?: string;
  corBarra?: string;
}

interface ContentSlide {
  content: Content[];
  title: string;
  text: string;
  id?: string;
}

function CarroselVertical({ title, text, content,id }: ContentSlide) {
  const [contentIndex, setContentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleButtonClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <>
      <section id={id} className={style.CarroselVertical}>
        <div className={style.Container}>
          <div className={style.BoxCarrosel}>
            <div
              className={` transition-opacity ${
                isTransitioning ? "opacity-0" : "opacity-100"
              } ${style.containerTitulo}`}
            >
              <h1 className="w-[80%] text-center">{title}</h1>
              <p>{text}</p>
            </div>
            <div
              style={{
                backgroundImage: `url(${content[contentIndex].banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "0.6s",
              }}
              className={` transition-transform animated-state-Jumbotron  ${style.containerCarrouselVertical}`}
            >
              <div className="w-full h-full flex gap-[15%] rounded-2xl bg-[#0000007e]">
                <div className={style.verticalMenu}>
                  {content.map((item, index) => (
                    
                    <div
                      key={index}
                      className={`transition-transform "animated-state-Jumbotron 
                        ${style.itemMenu}
                      }`}
                      onClick={() => handleButtonClick(index)}
                    >
                    
                      <div  className={`bg-white hover:bg-black ${style.barra}`}></div>
                      <h3
                        className={` ${
                          content.length === 4 ? "text-[19px]" : ""
                        } text-[24px] font-bold text-white`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
                <div
                  style={{ transition: "0.5s" }}
                  className={` transition-transform ${
                    contentIndex === 0
                      ? "animated-state-one"
                      : "animated-state-two"
                  } ${
                    contentIndex === 1
                      ? "animated-state-three"
                      : "animated-state-one"
                  } ${style.content}`}
                >
                  {content[contentIndex].logo && (
                    <Image
                      src={`${content[contentIndex].logo} `}
                      alt="Logo Produto do UX"
                      width={10}
                      height={10}
                      className="w-[300px] pb-5"
                    />
                  )}

                  <h1 className={`w-[76%]`}>
                    {content[contentIndex].contentTitle}
                  </h1>
                  <p>{content[contentIndex].contentText}</p>
                  <button className="hover:border hover:font-semibold hover:border-black text-black bg-white border border-transparent hover:text-black transition  hover:shadow-md">
                    <Link target="_blank" href={`${content[contentIndex].link}`}>
                      conheça a solução
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarroselVertical;
