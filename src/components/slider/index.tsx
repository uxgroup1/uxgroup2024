import Image from "next/image";
import React, { useState, useEffect } from "react";
import entregaPontual from "@/assets/ondetah/icones/entregaPontual.svg";
import reducao from "@/assets/ondetah/icones/reducaoCusto.svg";
import confianca from "@/assets/ondetah/icones/confianca.svg";
import experiencia from "@/assets/ondetah/icones/experiencia.svg";
import feedback from "@/assets/ondetah/icones/feedback.svg";

const content = [
  {
    title: "Entrega Pontual:",
    text: "Garanta que seus produtos sejam entregues dentro do prazo previsto, aumente a satisfação do cliente e fortaleça a reputação da sua marca.",
    icon: entregaPontual,
  },
  {
    title: "Redução de Custo:",
    text: "Evite atrasos e custos adicionais associados a entregas fora do prazo ou reenvios de produtos devido a problemas não resolvidos.",
    icon: reducao,
  },
  {
    title: "Maior Confiança do Cliente:",
    text: "Lide de forma rápida com as ocorrências e forneça atualizações transparentes sobre o status dos pedidos. Crie conexão com o seu cliente com comprometimento com a qualidade e o serviço.",
    icon: confianca,
  },
  {
    title: "Melhoria da Experiência do Cliente:",
    text: "Tenha uma abordagem proativa para lidar com ocorrências e resolva os problemas antes que afetem negativamente a experiência do cliente.",
    icon: experiencia,
  },
  {
    title: "Feedback Valioso:",
    text: "Acompanhe de perto os feedback dos clientes, assim você consegue identificar áreas de melhoria e implementar mudanças para otimizar ainda mais seus processos.",
    icon: feedback,
  },
];

export default function SliderTopics() {
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
    <section className="bg-white flex items-center justify-center w-full max-w-[1996px]">
      <div className="flex flex-col-reverse  md:flex-row-reverse w-[90%] justify-center items-center">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-start gap-[20%] w-full">
          <div className="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
            {content.map((_, index) => (
              <button
                key={index}
                className={`w-5 h-5 mx-2 rounded-full lg:mx-0 focus:outline-none ${
                  contentIndex === index
                    ? "bg-gradient-to-r from-[#29265B] to-[#009580] transition"
                    : "bg-white border transition border-[#009580]"
                }`}
                onClick={() => handleButtonClick(index)}
              ></button>
            ))}
          </div>

          <div
            style={{ transition: "0.9s ease-in-out" }}
            className={` order-2 w-full h-[500px] flex flex-col justify-center md:items-start items-center md:pt-0 pt-10 md:w-[80%]`}
          >
            <Image
              src={content[contentIndex].icon}
              className="md:w-20 flex items-center justify-center w-[30%] pb-5"
              width={0}
              height={0}
              alt="icone"
            />
            <h1 className="md:text-4xl md:text-left text-center text-3xl w-full transition-transform font-semibold text-black">
              {content[contentIndex].title}
            </h1>
            <p className="mt-2 md:text-left text-center text-black">
              {content[contentIndex].text}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-start w-full">
          <Image
            width={100}
            height={100} 
            className="object-cover w-full md:w-[80%] h-full  rounded-2xl"
            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
            alt="apple watch photo"
          />
        </div>
      </div>
    </section>
  );
}
