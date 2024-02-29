import CarrouselCards from "../carrouselCards";
import style from "./style.module.scss";

function UxMidia() {

    const content = [
        {
          title: "Armazenagem e expedição de pedidos ",
          text: "Todos os produtos armazenados e expedidos com 99,6% do cumprimento de SLA para uma operação eficiente com foco na experiência do cliente.",
          banner: "",
          index : 0
        },
        {
          title: "Gestão de estoque",
          text: "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
          banner: "",
          index : 1
        },
        {
          title: "Logística Reversa",
          text: "Transforme a devolução de produtos em oportunidades de satisfação. Simplifique as etapas com a garantia do mesmo cuidado com a expedição.",
          banner: "",
          index : 2
        },
        {
          title: "Gestão de transportes",
          text: "Otimize o seu transporte, com uma gestão de entregas 100% integradas a tecnologia permitindo tomada de decisão rápida e assertiva, garantindo o cuidado com a jornada do pedido.",
          banner: "",
          index : 3
        },
        {
          title: "PUDO's",
          text: "Aumente a satisfação do cliente com nossos pontos de coleta e entrega estrategicamente localizados. A conveniência e a agilidade ao alcance do seu cliente.",
          banner: "",
          index : 4
        },
        {
          title: "WMS",
          text: "Automação total para uma operação de e-commerce de alta performance. Digitalização e visibilidade em tempo real para gestão de estoque e coleta do pedido.",
          banner: "",
          index : 5
        },
        {
          title: "S&OP",
          text: "Evite atrasos e reclamações, com Planejamento de Vendas e Operação é possível alinhar e integrar as áreas para melhor gerenciamento de produtos e demandas garantindo a eficiência do processo logístico.",
          banner: "",
          index : 6
        },
      ];

  return (
    <>
      <section className={style.UxMidia}>
        <div className={style.Container}>
          <div className={style.BoxUxMidia}>
            <div className={style.Content}>
              <h1>UX na mídia</h1>
            </div>
          </div>
        </div>
        <CarrouselCards content={content} />
      </section>
    </>
  );
}

export default UxMidia;
