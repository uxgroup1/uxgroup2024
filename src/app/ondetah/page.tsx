"use client";
const Footer = dynamic(() => import("@/components/Footer"));
const Cta = dynamic(() => import("@/components/cta"));
const Header = dynamic(() => import("@/components/header"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const CarroselVertical = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain")
);
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
const ThreeTopics = dynamic(() => import("@/components/produtos/threeTopics"));
import headsetImage from "@/assets/ondetah/headset.svg";
import counterImage from "@/assets/ondetah/counter.svg";
import smartphoneImage from "@/assets/ondetah/smartphone.svg";
import imageOndetah from "@/assets/ondetah/ondetah.png";
import ondetahLogo from "@/assets/logos/ondetah.svg";
import dynamic from "next/dynamic";
import ProductInstitutional from "@/components/produtos/institucional";
import FeaturesComponent from "@/components/produtos/features";
import arrowList from "@/assets/ondetah/arrow/arrowListComponentesPudo.svg";

const contentFeatures = [
  {
    title: "Entrega Pontual: Garanta que seus produtos sejam entregues dentro do prazo previsto, aumente a satisfação do cliente e fortaleça a reputação da sua marca.",
    icons: arrowList,
  },
  {
    title:
      "Redução de Custos: Evite atrasos e custos adicionais associados a entregas fora do prazo ou reenvios de produtos devido a problemas não resolvidos. ",
    icons: arrowList,
  },
  {
    title: "Maior Confiança do Cliente: Lide de forma rápida com as ocorrências e forneça atualizações transparentes sobre o status dos pedidos. Crie conexão com o seu cliente com comprometimento com a qualidade e o serviço.    ",
    icons: arrowList,
  },
  {
    title:
      "Melhoria da Experiência do Cliente: Tenha uma abordagem proativa para lidar com ocorrências e resolva os problemas antes que afetem negativamente a experiência do cliente.",
    icons: arrowList,
  },
  {
    title:
      "Feedback Valioso: Acompanhe de perto os feedback dos clientes, assim você consegue identificar áreas de melhoria e implementar mudanças para otimizar ainda mais seus processos.",
    icons: arrowList,
  },
];

const content = [
  {
    index: 0,
    title: "Informação em Tempo Real",
    contentTitle: "Informação em Tempo Real",
    contentText:
      "Acompanhe cada etapa do pedido em tempo real. Desde a confirmação até a entrega, atualizações regulares, incluindo notificações em caso de eventos inesperados.",
    banner: "",
  },
  {
    index: 1,
    title: "Redução de Contatos no SAC",
    contentTitle: "Redução de Contatos no SAC",
    contentText:
      "Utilize nosso SAC 4.0 com um chatbot disponível 24 horas por dia. Reduza o tempo de espera e resolva questões rapidamente através de aplicativos de mensagens, garantindo uma experiência mais positiva para o cliente e reduzindo custos.",

    banner: "",
  },
  {
    index: 2,
    title: "Entrega Sustentável",
    contentTitle: "Entrega Sustentável",
    contentText:
      "Deixe suas entregas mais ecológicas através da compensação de carbono. Utilizamos tecnologia para calcular e neutralizar as emissões de carbono associadas aos seus pedidos, e fornecemos certificados de compensação para cada compra.",

    banner: "",
  },
  {
    index: 3,
    title: "Pesquisas de Satisfação",
    contentTitle: "Pesquisas de Satisfação Personalizadas",
    contentText:
      "Fidelize seus clientes com pesquisas de satisfação adaptadas às suas necessidades. Entenda melhor a experiência do cliente e reverta possíveis insatisfações, garantindo uma jornada de compra mais positiva.",

    banner: "",
  },
];

const contentTopics = [
  {
    icon: headsetImage,
    title: `50% de Redução de Contato com SAC`,
    text: "",
  },
  {
    icon: smartphoneImage,
    title: "100% dos Pedidos com Tracking Centralizado",
    text: "",
  },
  {
    icon: counterImage,
    title: "+5 Pontos Percentuais na Performance de Entrega",
    text: "",
  },
];

export default function Ondetah() {
  return (
    <main>
      <Header />
      <JumboTron
        textButtonOne="fale com um especialista"
        textButtonTwo="saiba mais"
        linkButtonOne=""
        linkButtonTwo=""
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        logo={ondetahLogo}
        title="Aplique eficiência, controle e sustentabilidade à sua operação através de tecnologia."
        banner={imageOndetah.src}
        text="Gerenciamento simplificado de prazos e ocorrências, informação em tempo real e compensação de carbono que garantem a experiência do cliente."
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        title="Produtividade e sustentabilidade um um único lugar."
        text="Uma solução tecnológica inovadora de rastreamento que permite ao gestor das vendas digitais e de transportes o acompanhamento em tempo real de todas as etapas do processo, podendo atuar de forma inteligente com base em dados e assim,  reduzir custos, melhorar a performance e a satisfação do cliente."
        banner={imageOndetah.src}
        corButtonOne="#28265b"
        corButtonTwo="#009580"
        linkButtonOne=""
        linkButtonTwo=""
        textButtonOne="saiba mais"
        textButtonTwo="agendar reunião"
      />
      <ThreeTopics
        content={contentTopics}
        title="Garanta uma solução completa focada na experiência do cliente e no sucesso do seu negócio."
        text=""
      />
      <CarroselVertical
        content={content}
        title="Transforme a experiência do seu cliente com funcionalidades exclusivas."
        text=""
      />
      <SecondSection
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Gestão de Prazos e Ocorrências."
        text="Entendemos a importância de uma gestão de prazos eficiente e de como lidar com ocorrências de maneira proativa pode impactar positivamente sua operação e a experiência do seu cliente. Com o Ondetah você pode acompanhar de perto o desempenho da sua operação e identificar possíveis distorções entre os prazos prometidos e os prazos reais de entrega. Atue de maneira preventiva, evite contatos no SAC e ainda melhore a satisfação do cliente."
        image=""
        flowReverse={false}
      />
      <Cta
        banner={
          "https://ondetah.com.br/wp-content/uploads/2023/08/ondetah-banner03.png"
        }
        button
        title="Garanta mais informações sobre suas entregas através de nosso dashboard exclusivo. "
      />
      <FeaturesComponent
          rowReverse={false}
          titleSection="Confira os benefícios da nossa solução para uma gestão de prazos e ocorrências:"
          content={contentFeatures}
          banner={""}
        />

      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}
