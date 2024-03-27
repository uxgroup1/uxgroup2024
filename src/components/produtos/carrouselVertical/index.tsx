import { useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";

interface Content {
  title: string;
  image: string;
}

interface ContentSection {
  content: Content[];

}

function CarroselImages({ content }: ContentSection) {
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
              <h1>Inove, Controle e Venda Mais</h1>
              <p>
                Adapte-se às mudanças do mercado com facilidade. Nossas soluções
                de tecnologia modulares oferecem flexibilidade, informação e
                eficiência para a gestão de fretes, gestão de transportes e
                comunicação das suas vendas digitais. Conheça nossas soluções!
              </p>
            </div>
            <div
              style={{
                backgroundImage: `url(${content[contentIndex].image})`,
              }}
              className={`bg-no-repeat bg-center bg-cover ${style.containerCarrouselVertical}`}
            >
              <div className="bg-[#000000a0] h-full w-full rounded-2xl">
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
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarroselImages;
