"use client";
import Footer from "@/components/Footer";
import Cta from "@/components/cta";
import Header from "@/components/header";
import ContactForm from "@/components/institucional/ContactForm";
import CarroselVertical from "@/components/institucional/carrouselVerticalMain";
import JumboTron from "@/components/produtos/jumbotron";
import ThreeTopics from "@/components/produtos/threeTopics";


const content = [
    {
      index: 0,
      title: "Informação em Tempo Real",
      contentTitle: "Informação em Tempo Real",
      contentText:
        "Acompanhe cada etapa do pedido em tempo real. Desde a confirmação até a entrega, atualizações regulares, incluindo notificações em caso de eventos inesperados.",
    },
    {
      index: 1,
      title: "Redução de Contatos no SAC",
      contentTitle: "Redução de Contatos no SAC",
      contentText:
        "Utilize nosso SAC 4.0 com um chatbot disponível 24 horas por dia. Reduza o tempo de espera e resolva questões rapidamente através de aplicativos de mensagens, garantindo uma experiência mais positiva para o cliente e reduzindo custos.",
    },
    {
      index: 2,
      title: "Entrega Sustentável",
      contentTitle: "Entrega Sustentável",
      contentText:
        "Deixe suas entregas mais ecológicas através da compensação de carbono. Utilizamos tecnologia para calcular e neutralizar as emissões de carbono associadas aos seus pedidos, e fornecemos certificados de compensação para cada compra.",
    },
    {
      index: 3,
      title: "Pesquisas de Satisfação",
      contentTitle: "Pesquisas de Satisfação Personalizadas",
      contentText:
        "Fidelize seus clientes com pesquisas de satisfação adaptadas às suas necessidades. Entenda melhor a experiência do cliente e reverta possíveis insatisfações, garantindo uma jornada de compra mais positiva.",
    },
  ];

  const contentTopics = [
    {
      icon: "",
      title: `50% de Redução de Contato com SAC`,
      text: "",
    },
    {
      icon: "",
      title: "100% dos Pedidos com Tracking Centralizado",
      text: "",
    },
    {
      icon: "",
      title: "+5 Pontos Percentuais na Performance de Entrega",
      text: "",
    },
  ];

export default function Ondetah() {
  return (
    <main>
      <Header />
      <JumboTron
        title="We invest in the world’s potential"
        banner="https://ondetah.com.br/wp-content/uploads/2021/02/background-ondetah-2.gif"
        text="Oferecemos uma experiência de rastreamento única, focada na experiência do cliente e na sustentabilidade. São diversas possibilidades de integração com tecnologias ERP, TMS Embarcador, TMS Transportador e uma estrutura única de SAC que facilitam a gestão do pedido. É mais do que apenas informação: é conexão, satisfação e tecnologia avançada."
      />
       <section style={{paddingTop:'50px', paddingBottom:"0px"}}></section>
      <CarroselVertical content={content} title="Transforme a experiência do seu cliente com funcionalidades exclusivas."  text="" />
      <ThreeTopics content={contentTopics} title="Garanta uma solução completa focada na experiência do cliente e no sucesso do seu negócio" text=""  /> 
      <Cta banner={"https://ondetah.com.br/wp-content/uploads/2023/08/ondetah-banner03.png"} button  title="Garanta mais informações sobre suas entregas através de nosso dashboard exclusivo. "/>
      <section style={{paddingTop:'0px', paddingBottom:"30px"}}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}
