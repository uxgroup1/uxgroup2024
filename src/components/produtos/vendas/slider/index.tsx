import Image from "next/image";
import React, { useState, useEffect } from "react";
import entregaPontual from "@/assets/ondetah/icones/entregaPontual.svg";
import reducao from "@/assets/ondetah/icones/reducaoCusto.svg";
import confianca from "@/assets/ondetah/icones/confianca.svg";
import experiencia from "@/assets/ondetah/icones/experiencia.svg";
import feedback from "@/assets/ondetah/icones/feedback.svg";
import beneficios from "@/assets/ondetah/imagesSections/beneficios.png";

const content = [
  {
    title: "Integração com as principais plataformas do mercado:",
    text: "Nossa solução se conecta facilmente com as principais plataformas de e-commerce, facilitando a gestão e aumentando a eficiência.",
    icon: "",
  },
  {
    title: "Experiência de compra otimizada:",
    text: "Melhoramos a jornada do cliente, tornando o processo de compra mais rápido e agradável.",
    icon: "",
  },
  {
    title: "Automatização completa:",
    text: "Deixe a automação cuidar das operações, permitindo que você se concentre no crescimento e nas estratégias de vendas.",
    icon: "",
  },
  {
    title: "Escalabilidade simplificada:",
    text: "Fácil adição de novas integrações e funcionalidades à medida que sua empresa cresce, garantindo que suas operações possam se expandir sem complicações.",
    icon: "",
  },
  {
    title: "Escalabilidade simplificada:",
    text: "Fácil adição de novas integrações e funcionalidades à medida que sua empresa cresce, garantindo que suas operações possam se expandir sem complicações.",
    icon: "",
  },
];

export default function SliderTopicsVendas() {
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 5000); // Altere o tempo conforme necessário (em milissegundos)
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [contentIndex]);

  const handleNextSlide = () => {
    setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handleButtonClick = (index: any) => {
    setContentIndex(index);
  };

  return (
    <section className="bg-white flex items-center pb-[100px] justify-center w-full max-w-[1996px]">
      <div className="flex flex-col-reverse  md:flex-row w-[90%] justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row  items-center justify-start gap-[10%] w-full">
          <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            {content.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-5 mx-2 rounded-full lg:mx-0 focus:outline-none ${contentIndex === index
                    ? "bg-gradient-to-r from-[#A900D9] to-[#450071] transition"
                    : "bg-white border transition border-[#A900D9]"
                  }`}
                onClick={() => handleButtonClick(index)}
              ></button>
            ))}
          </div>

          <div
            className={` order-2 md:pt-0 pt-10 w-full md:h-[450px] rounded-2xl  md:p-10 h-[400px] flex flex-col justify-center md:items-start items-center  md:w-[80%]`}
          >
            <Image
              src={content[contentIndex].icon}
              className="md:w-20 flex items-center justify-center w-[30%] pb-5"
              width={100}
              height={100}
              alt="icone"
            />
            <h1 className="md:text-4xl md:text-left text-center text-3xl w-full font-semibold text-black">
              {content[contentIndex].title}
            </h1>
            <p className="mt-2 md:text-left text-center text-black">
              {content[contentIndex].text}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          <Image
            width={100}
            height={100}
            className="object-cover w-full md:w-[80%] h-full  rounded-2xl"
            src={beneficios.src}
            alt="apple watch photo"
          />
        </div>
      </div>
    </section>
  );
}
