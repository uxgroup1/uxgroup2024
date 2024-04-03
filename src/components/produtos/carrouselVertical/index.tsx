import { useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";

interface Content {
  title: string;
  image: string;
  titleItem: string;
  textItem: string;
}

interface ContentSection {
  content: Content[];
  title: string;
  subtitle: string;
}

function CarroselImages({ content, title, subtitle }: ContentSection) {
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
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div
              style={{
                backgroundImage: `url(${content[contentIndex].image})`,
                backgroundSize: "cover",
                transition: "0.3s ease-in-out",
              }}
              className={`bg-no-repeat bg-center bg-cover ${style.containerCarrouselVertical}`}
            >
              <div className=" flex items-center justify-center bg-[#000000a0] h-full w-full rounded-2xl">
                <div className={style.verticalMenu}>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      className={`transition-opacity ${
                        isTransitioning ? "opacity-0" : "opacity-100"
                      } ${style.itemMenu}`}
                      onClick={() => handleButtonClick(index)}
                    >
                      <div className={style.barra}></div>
                      <h3 className="text-[24px] font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
                <div className="w-[70%]">
                  <div className="w-4/5">
                    <h1 className="text-3xl">
                      {content[contentIndex].titleItem}
                    </h1>
                    <p>
                    {content[contentIndex].textItem}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarroselImages;
