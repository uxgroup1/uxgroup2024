const CarrouselCards = dynamic(() => import("../carrouselCards"));
import style from "./style.module.scss";
import armazenagemImage from "@/assets/home/carrouselCardsLog/armazenagem.png";
import gestaoEstoqueImage from "@/assets/home/carrouselCardsLog/gestaoEstoque.png";
import reversaImage from "@/assets/home/carrouselCardsLog/Reversa.png";
import gestaoTransporte from "@/assets/home/carrouselCardsLog/gestaoTransporte.png";
import pudoImage from "@/assets/home/carrouselCardsLog/PUDO.png";
import wmsImage from "@/assets/home/carrouselCardsLog/WMS.png";
import seop from "@/assets/home/carrouselCardsLog/seop.png";
import dynamic from "next/dynamic";

const content = [
  {
    title: "Armazenagem e expedição de pedidos ",
    text: "Todos os produtos armazenados e expedidos com 99,6% do cumprimento de SLA para uma operação eficiente com foco na experiência do cliente.",
    banner: armazenagemImage.src,
    link: "",
  },
  {
    title: "Gestão de estoque",
    text: "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.    ",
    banner: gestaoEstoqueImage.src,
    link: "",
  },
  {
    title: "S&OP",
    text: "Evite atrasos e reclamações, com Planejamento de Vendas e Operação é possível alinhar e integrar as áreas para melhor gerenciamento de produtos e demandas garantindo a eficiência do processo logístico.    ",
    banner: seop.src,
    link: "",
  },
  {
    title: "Gestão de transportes",
    text: "Otimize o seu transporte, com uma gestão de entregas 100% integradas a tecnologia permitindo tomada de decisão rápida e assertiva, garantindo o cuidado com a jornada do pedido.",
    banner: gestaoTransporte.src,
    link: "",
  },
  {
    title: "PUDO's",
    text: "Aumente a satisfação do cliente com nossos pontos de coleta e entrega estrategicamente localizados. A conveniência e a agilidade ao alcance do seu cliente.    ",
    banner: pudoImage.src,
    link: "",
  },
  {
    title: "WMS",
    text: "Automação total para uma operação de e-commerce de alta performance. Digitalização e visibilidade em tempo real para gestão de estoque e expedição do pedido.",
    banner: wmsImage.src,
    link: "",
  },
];

function LogisticaComPerformance({id}:any) {
  return (
    <>
      <section  id={id} className={` ${style.CarrouselProducts}`}>
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
            </div>
          </div>
        </div>

        <CarrouselCards colorText="black" content={content} />
      </section>
    </>
  );
}

export default LogisticaComPerformance;
