import { useState } from "react";
import style from "./style.module.scss";

function CarroselVertical() {
  const [contentIndex, setContentIndex] = useState(0);
  const content = [
    {
      index: 0,
      title: "TMS embarcador",
      contentTitle: "TMS embarcador",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
    {
      index: 1,
      title: "TMS Transportador",
      contentTitle: "TMS Transportador",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
    {
      index: 2,
      title: "Plataforma de comunicação",
      contentTitle: "Plataforma de comunicação",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
    {
      index: 3,
      title: "Loja digital",
      contentTitle: "Loja digital",
      contentText:
        "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    },
  ];

  const handleButtonClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <>
      <section className={style.CarroselVertical}>
        <div className={style.Container}>
          <div className={style.BoxCarrosel}>
            <div className={style.containerTitulo}>
              <h1>Inove, Controle e Venda Mais</h1>
              <p>
                Adapte-se às mudanças do mercado com facilidade. Nossas soluções
                de tecnologia modulares oferecem flexibilidade, informação e
                eficiência para a gestão de fretes, gestão de transportes e
                comunicação das suas vendas digitais. Conheça nossas soluções!
              </p>
            </div>
            <div className={style.containerCarrouselVertical}>
              <div className={style.verticalMenu}>
                {content.map((item, index) => (
                  <div
                    key={index}
                    className={style.itemMenu}
                    onClick={() => handleButtonClick(index)}
                  >
                    <div className={style.barra}></div>
                    <h3 className=" text-base text-white">{item.title}</h3>
                  </div>
                ))}
              </div>
              <div className={style.content}>
                <h1>{content[contentIndex].contentTitle}</h1>
                <p>{content[contentIndex].contentText}</p>
                <button>saiba mais</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarroselVertical;
