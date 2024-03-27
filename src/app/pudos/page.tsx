"use client";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
import svg from "@/assets/faviconBanner/ux-gestao.svg";
const FeaturesComponent = dynamic(
  () => import("@/components/produtos/features")
);
const CarroselVertical = dynamic(
  () => import("@/components/institucional/carrouselVerticalMain")
);
const ThreeTopics = dynamic(() => import("@/components/produtos/threeTopics"));
import imageMonetizationTopics from "@/assets/pudo/monetization.svg";
import imageStoreFrontTopics from "@/assets/pudo/storefront.svg";
import arrowList from "@/assets/pudo/arrow/arrowListComponentesPudo.svg";
import pudoLogo from "@/assets/logos/pudos.svg";

const contentFeatures = [
  {
    title: "Tecnologia integrada à operação.",
    icons: arrowList,
  },
  {
    title:
      "Ao agrupar várias entregas em um único ponto de retirada, você reduz as despesas de transporte e logística.",
    icons: arrowList,
  },
  {
    title: "Operação mais limpa com menos etapas no processo de entrega.",
    icons: arrowList,
  },
  {
    title:
      "Melhoria da experiência do cliente com mais controle e agilidade no processo de entrega.",
    icons: arrowList,
  },
];

const content = [
  {
    index: 0,
    title: "Satisfação do Cliente",
    contentTitle: "Aumente a Satisfação do Cliente",
    contentText:
      "Com os pontos de pick-up and drop-off, você acelera o processo de entrega, reduzindo as etapas para que a mercadoria chegue para o seu cliente.",
  },
  {
    index: 1,
    title: "Reduza Custos de Entrega",
    contentTitle: "Reduza Custos de Entrega",
    contentText:
      "Com o PUDO, você pode reduzir os custos de entrega, com menos paradas para o motoristas, você tem uma economia significativa em despesas de transporte e logística.",
  },
  {
    index: 2,
    title: "Confiabilidade da Entrega",
    contentTitle: "Aumente a Confiabilidade da Entrega",
    contentText:
      "Ao utilizar uma rede confiável de pontos de coleta, você pode garantir aos sellers que realizem o processo de expedição de forma rápida e segura, melhorando a reputação da sua marca.",
  },
];

const contentTopics = [
  {
    icon: imageMonetizationTopics,
    title: "Aumente o Tráfego na Loja",
    text: "Ao se tornar um PUDO, você pode aumentar o número de visitantes e atrair novos clientes que podem acabar comprando em sua loja.",
  },
  {
    icon: imageStoreFrontTopics,
    title: "Tenha uma Nova Fonte de Renda",
    text: "Se você possui espaços ociosos na sua loja, você pode rentabilizar em até 5 mil reais, tornando um PUDO.",
  },
  {
    icon: "",
    title: "Lorem ipsum dolor sit amet, consectetur",
    text: "lorem ipsum dolor sit amet, consectet durit esse cill.",
  },
];

export default function Pudos() {
  return (
    <>
      <main>
        <Header />
        <JumboTron
          corButtonOne="#ff7f12"
          logo={pudoLogo}
          title="We invest in the world’s potential"
          text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
          banner=""
        />
        <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
        <SecondSection
          flowReverse={false}
          title="Lorem"
          text="Estamos aqui para tornar suas entregas mais simples e convenientes do que nunca. Com o PUDO, ou Pick-Up and Drop-Off, oferecemos uma solução flexível e eficaz para o last mile. Com mais de 140 pontos espalhados em toda grande São Paulo, você pode escolher um local próximo para entregar ou retirar seu pacote ."
          image={svg}
        />
        <CarroselVertical
          title="Para Marketplaces"
          text="Se você é um gestor de vendas digitais, o serviço PUDO pode ser a solução ideal para melhorar a experiência do cliente e otimizar suas operações de logística. Aqui estão alguns benefícios de usar o PUDO em seu negócio."
          content={content}
        />
        <ThreeTopics
          content={contentTopics}
          title="Para Proprietários de Lojas Físicas"
          text="Se você possui uma loja física, o serviço PUDO pode ser uma oportunidade para atrair mais clientes e aumentar a sua renda. Veja como o PUDO pode beneficiar o seu negócio."
        />
        <FeaturesComponent
          rowReverse={true}
          titleSection="Benefícios de escolher o PUDO da UX"
          content={contentFeatures}
          banner={svg}
        />
        <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
