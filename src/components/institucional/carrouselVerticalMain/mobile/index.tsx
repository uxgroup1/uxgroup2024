import { useState, useEffect } from "react";
import style from "./style.module.scss";

function CarroselVerticalMobile() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [content.length]);

  const handleStepClick = (index: number) => {
    setContentIndex(index);
  };

  return (
    <section className={style.Section}>
      <div className="container bg mx-auto px-4">
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
            <div className="z-20 w-full flex items-center rounded-t-[16px] bg-black justify-center h-20">

            
            <ol className="flex justify-center w-full">
              {content.map((item, index) => (
                <li
                
                  key={index}
                  className={`flex w-full justify-center items-center h-1 ${
                    index <= contentIndex
                      ? "text-blue-600 bg-black h-1"
                      : "bg-white"
                  } ${
                    index == 3 
                      ? "bg-white"
                      : "bg-white w-0 h-0"
                  } `}
                  onClick={() => handleStepClick(index)}
                >
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      index <= contentIndex ? "bg-[#fff]" : "bg-white "
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 ${
                        index <= contentIndex ? "text-black" : "text-[#bfbfbf]"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      {index === 0 ? (
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1V9zM10 5a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      ) : (
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      )}
                    </svg>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div
            style={{ borderRadius: "0px 0px 16px 16px" }}
            className="flex bg-[#5F5F5F] h-[400px] flex-col md:flex-row"
          >
            <div className="w-full flex flex-col justify-center h-full px-[50px] pb-[50px] pt-[50px]">
              <h1 className="text-2xl text-white font-bold mb-4">
                {content[contentIndex].contentTitle}
              </h1>
              <p className="text-white">{content[contentIndex].contentText}</p>
              <button className={style.Button}>Saiba mais</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarroselVerticalMobile;
