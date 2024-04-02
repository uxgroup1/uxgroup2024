import { useState } from "react";
import style from "./style.module.scss";

interface Content {
  title: string;
  contentTitle: string;
  contentText: string;
  banner: string;
}

interface ContentSlide {
  content: Content[];
  title: string;
  text: string;
}

function CarroselVertical({ title, text, content }: ContentSlide) {
  const [contentIndex, setContentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleButtonClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <>
      <section className={style.CarroselVertical}>
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
                transition: "0.3s",
              }}
              className={style.containerCarrouselVertical}
            >
              <div className="w-full h-full flex gap-[15%] rounded-2xl bg-[#0000007e]">
                <div className={style.verticalMenu}>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      className={`transition-transform ${
                        contentIndex === 0
                          ? "animated-state-one"
                          : "animated-state-two"
                      } ${style.itemMenu}`}
                      onClick={() => handleButtonClick(index)}
                    >
                      <div className={style.barra}></div>
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
                  className={` transition-transform ${
                    contentIndex === 0
                      ? "animated-state-one"
                      : "animated-state-two"
                  }  ${style.content}`}
                >
                  <h1
                    className={`transition-transform ${
                      contentIndex === 0
                        ? "animated-state-one"
                        : "animated-state-two"
                    }, 
                  w-4/5`}
                  >
                    {content[contentIndex].contentTitle}
                  </h1>
                  <p>{content[contentIndex].contentText}</p>
                  <button className="hover:border hover:font-semibold hover:border-black text-black bg-white border border-transparent hover:text-black transition  hover:shadow-md">
                    saiba mais
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
