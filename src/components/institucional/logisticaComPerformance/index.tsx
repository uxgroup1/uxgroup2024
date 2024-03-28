import { title } from "process";
import CarrouselCards from "../carrouselCards";
import style from "./style.module.scss";
import armazenagemImage from "@/assets/home/carrouselCardsLog/armazenagem.png"
import gestaoEstoqueImage from "@/assets/home/carrouselCardsLog/gestaoEstoque.png"
import reversaImage from "@/assets/home/carrouselCardsLog/Reversa.png"
import gestaoTransporte from "@/assets/home/carrouselCardsLog/gestaoTransporte.png"
import pudoImage from "@/assets/home/carrouselCardsLog/PUDO.png"
import wmsImage from "@/assets/home/carrouselCardsLog/WMS.png"
import seop from "@/assets/home/carrouselCardsLog/seop.png"

const content = [
  {
    title: "Armazenagem e expedição de pedidos ",
    text: "Todos os produtos armazenados e expedidos com 99,6% do cumprimento de SLA para uma operação eficiente com foco na experiência do cliente.",
    banner: armazenagemImage.src,
    link:""
   
  },
  {
    title: "Gestão de estoque",
    text: "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
    banner: gestaoEstoqueImage.src,
    link:""
  },
  {
    title: "Logística Reversa",
    text: "Transforme a devolução de produtos em oportunidades de satisfação. Simplifique as etapas com a garantia do mesmo cuidado com a expedição.",
    banner: reversaImage.src,
    link:""
  },
  {
    title: "Gestão de transportes",
    text: "Otimize o seu transporte, com uma gestão de entregas 100% integradas a tecnologia permitindo tomada de decisão rápida e assertiva, garantindo o cuidado com a jornada do pedido.",
    banner: gestaoTransporte.src,
    link:""
  },
  {
    title: "PUDO's",
    text: "Aumente a satisfação do cliente com nossos pontos de coleta e entrega estrategicamente localizados. A conveniência e a agilidade ao alcance do seu cliente.",
    banner: pudoImage.src,
    link:""
  },
  {
    title: "WMS",
    text: "Automação total para uma operação de e-commerce de alta performance. Digitalização e visibilidade em tempo real para gestão de estoque e coleta do pedido.",
    banner: wmsImage.src,
    link:""
  },
  {
    title: "S&OP",
    text: "Evite atrasos e reclamações, com Planejamento de Vendas e Operação é possível alinhar e integrar as áreas para melhor gerenciamento de produtos e demandas garantindo a eficiência do processo logístico.",
    banner: seop.src,
    link:""
  },
];

function LogisticaComPerformance() {
  return (
    <>
      <section className={style.CarrouselProducts}>
        <div className={style.Container}>
          <div className={style.BoxCarrouselProducts}>
            <div className={style.Controller}>
              <div className={style.ControllerContent}>
                <div className="flex gap-0 flex-col leading-[120%]">
                  <h1> Logística com Performance </h1> e indicadores de sucesso
                </div>
                <p>
                  Da armazenagem inteligente à torre de controle, oferecemos uma
                  solução completa da sua operação integrada à tecnologia que se
                  adapta às suas necessidades de fulfillment e transportes,
                  proporcionando agilidade e eficiência.
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
