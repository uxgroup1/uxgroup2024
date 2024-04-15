const CarrouselCards = dynamic(() => import("../carrouselCards"));
import { useRef } from "react";
import style from "./style.module.scss";
import armazenagemImage from "@/assets/home/carrouselCardsLog/armazenagem.png";
import gestaoEstoqueImage from "@/assets/home/carrouselCardsLog/gestaoEstoque.png";
import gestaoTransporte from "@/assets/home/carrouselCardsLog/gestaoTransporte.png";
import pudoImage from "@/assets/home/carrouselCardsLog/PUDO.png";
import wmsImage from "@/assets/home/carrouselCardsLog/WMS.png";
import seop from "@/assets/home/carrouselCardsLog/seop.png";
import arrowLeft from "@/assets/cta/arrowLeft.svg";
import arrowRight from "@/assets/cta/arrowRigth.svg";
import dynamic from "next/dynamic";
import Image from "next/image";

const content = [
  {
    title: "Armazenagem e expedição de pedidos ",
    text: "Todos os produtos armazenados e expedidos com 99,6% do cumprimento de SLA para uma operação eficiente com foco na experiência do cliente.",
    banner: armazenagemImage.src,
    link: "/logistica",
  },
  {
    title: "Gestão de estoque",
    text: "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.    ",
    banner: gestaoEstoqueImage.src,
    link: "/logistica",
  },
  {
    title: "S&OP",
    text: "Evite atrasos e reclamações, com Planejamento de Vendas e Operação é possível alinhar e integrar as áreas para melhor gerenciamento de produtos e demandas garantindo a eficiência do processo logístico.    ",
    banner: seop.src,
    link: "/logistica",
  },
  {
    title: "Gestão de transportes",
    text: "Otimize o seu transporte, com uma gestão de entregas 100% integradas a tecnologia permitindo tomada de decisão rápida e assertiva, garantindo o cuidado com a jornada do pedido.",
    banner: gestaoTransporte.src,
    link: "/torre",
  },
  {
    title: "PUDO's",
    text: "Aumente a satisfação do cliente com nossos pontos de coleta e entrega estrategicamente localizados. A conveniência e a agilidade ao alcance do seu cliente.    ",
    banner: pudoImage.src,
    link: "/pudos",
  },
  {
    title: "WMS",
    text: "Automação total para uma operação de e-commerce de alta performance. Digitalização e visibilidade em tempo real para gestão de estoque e expedição do pedido.",
    banner: wmsImage.src,
    link: "/logistica",
  },
];

function LogisticaComPerformance({ id }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 1000,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 1000,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <section id={id} className={` ${style.CarrouselProducts}`}>
        <div className={style.Container}>
          <div className={style.BoxCarrouselProducts}>
            <div className={style.Controller}>
              <div className={style.ControllerContent}>
                <div className="flex gap-0 flex-col leading-[120%]">
                  <h1> Tecnologia na operação logística.</h1>
                </div>
                <p>
                  Do pedido no CD até o cliente final, oferecemos uma solução
                  completa de operação logística integrada à tecnologia UX que
                  permite tranquilidade ao embarcador focar no crescimento de
                  suas vendas.
                </p>
              </div>
              <div className="w-full flex-row gap-4 pb-2 md:[display:flex] [display:none] justify-center md:justify-end">
                <div
                  className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                  onClick={handleScrollLeft}
                >
                  <Image
                    src={arrowLeft}
                    alt="Seta esquerda"
                    width={40}
                    height={40}
                  />
                </div>
                <div
                  className="w-12 p-[10px] hover:p-[12px] shadow-md transition-all rounded-2xl bg-[#bfbfbf56] cursor-pointer"
                  onClick={handleScrollRight}
                >
                  <Image
                    src={arrowRight}
                    alt="Seta direita"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <CarrouselCards
          containerRef={containerRef}
          colorText="black"
          content={content}
        />
      </section>
    </>
  );
}

export default LogisticaComPerformance;
