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
        banner=""
        corButtonOne="#28265b"
        corButtonTwo="#009580"
        linkButtonOne=""
        linkButtonTwo=""
        textButtonOne=""
        textButtonTwo=""
      />
      <ThreeTopics
        content={contentTopics}
        title="Garanta uma solução completa focada na experiência do cliente e no sucesso do seu negócio."
        text=""
      />
      {/* <CarroselVertical
        content={content}
        title="Transforme a experiência do seu cliente com funcionalidades exclusivas."
        text=""
      /> */}

      <SecondSection
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Acompanhe em tempo real todas as etapas do pedido."
        text="A cada etapa realizada, o cliente é informado sobre o status da sua compra. Desde a confirmação de pagamento até a entrega, com pushes ao longo do processo até mesmo em caso de ocorrência. Tecnologias integradas que possibilitam assertividade e agilidade da informação para o cliente."
        image=""
        flowReverse={false}
      />
      <SecondSection
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Reduza o contato no SAC com atendimento facilitado com chatbot disponível 24h."
        text="Através de aplicativos de mensagens, conseguimos auxiliar o cliente de forma mais ágil, tornando a relação da marca com o cliente mais positiva. Essa comunicação facilitada com contato 100% digital para atendimento, acompanhamento e solicitação de serviços reflete em uma redução de contato no SAC."
        image=""
        flowReverse={true}
      />
      <Cta
        banner={
          "https://ondetah.com.br/wp-content/uploads/2023/08/ondetah-banner03.png"
        }
        button
        title="Garanta mais informações sobre suas entregas através de nosso dashboard exclusivo. "
      />
      <SecondSection
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Gere valor a sua marca através da compensação de carbono com baixo investimento."
        text="Entregas verdes usando tecnologia na operação. A Ondetah possibilita a neutralização através do cálculo do carbono emitido pelo pedido pré ou pós venda. Dessa forma, você cria uma conexão direta com o cliente, entregando ao final da compra um certificado nominal com as informações sobre a compensação de carbono do pedido."
        image=""
        flowReverse={false}
      />
      <SecondSection
        corButtonOne="#29265B"
        corButtonTwo="#009580"
        title="Fidelize clientes através das informações obtidas no seu pós-venda."
        text="Com intuito de tornar o atendimento cada vez mais próximo e facilitar a interação com o cliente, a pesquisa de satisfação é personalizada de acordo com o que deseja medir sobre o seu processo de entrega. Além de demonstrar a sua preocupação com o cliente, permite que você reverta possíveis insatisfações e garanta uma experiência mais positiva."
        image=""
        flowReverse={true}
      />
      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}
