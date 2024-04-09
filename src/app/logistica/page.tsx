"use client";

import dynamic from "next/dynamic";
const Header = dynamic(() => import("@/components/header/index"));
const ContactForm = dynamic(
  () => import("@/components/institucional/ContactForm")
);
const Footer = dynamic(() => import("@/components/Footer"));
const JumboTron = dynamic(() => import("@/components/produtos/jumbotron"));
const SecondSection = dynamic(
  () => import("@/components/produtos/SecondSection")
);

const Cta = dynamic(() => import("@/components/cta"));
import itapeviImage from "@/assets/logistica/cdsImages/itapevi.png";
import barueriImage from "@/assets/logistica/cdsImages/barueri.png";
import itajaiImage from "@/assets/logistica/cdsImages/itajai.png";
import anvisaImage from "@/assets/logistica/anvisa.png";
import fulfillmet from "@/assets/logos/fulfillment.svg";
import ProductInstitutional from "@/components/produtos/institucional";
import CarroselVertical from "@/components/institucional/carrouselVerticalMain";
import CarroselVerticalMobile from "@/components/institucional/carrouselVerticalMain/mobile";
import logoAmazon from "@/assets/logistica/logo-amzn.png";
import wmsImage from "@/assets/logistica/wms.png";
import ThreeTopics from "@/components/produtos/threeTopics";
import imageOne from "@/assets/logistica/one.svg";
import imageTwo from "@/assets/logistica/two.svg";
import imageThree from "@/assets/logistica/three.svg";
import imageFour from "@/assets/logistica/four.svg";
import banner from "@/assets/logistica/ffBanner.png";
import logoAnvisa from "@/assets/logistica/anvisa-logo.png";
import bannerInstitucional from "@/assets/logistica/img-ff.png";
import estoqueImage from "@/assets/logistica/estoque-avancado.gif";
import FeaturesComponent from "@/components/produtos/features";
import arrow from "@/assets/logistica/arrow/arrowListComponentes.svg";
import Script from "next/script";
import Numbers from "@/components/produtos/numbers";
import FeaturesComponentLog from "@/components/produtos/featuresLog";
import iconeOne from "@/assets/logistica/icones/gestao.png"
import iconeTwo from "@/assets/logistica/icones/homologados.png"
import iconeThree from "@/assets/logistica/icones/localizacao.png"
import iconeFour from "@/assets/logistica/icones/pudos.png"

const content = [
  {
    index: 0,
    title: "CD Itapevi",
    contentTitle: "CD Itapevi",
    contentText:
      "Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega.",
    banner: itapeviImage.src,
  },
  {
    index: 1,
    title: "CD Barueri",
    contentTitle: "CD Barueri",
    contentText:
      "Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega.",
    banner: barueriImage.src,
  },
  {
    index: 2,
    title: "CD Itajaí",
    contentTitle: "CD Barueri",
    contentText:
      "Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega.",
    banner: itajaiImage.src,
  },
];

const number = [
  {
    number: "+30K m²",
    text: "CDs próprios para Fulfillment.",
  },
  {
    number: "99,3%",
    text: "Armazenagem e CD no prazo D0.",
  },
  {
    number: "+98,86%",
    text: "Acurácia de Inventário.",
  },
  {
    number: "70K",
    text: "pedidos pesados faturados por mês.",
  },
];

const contentFeaturesOne = [
  {
    title: "Redução de custos operacionais.",
    icons: arrow,
  },
  {
    title: "Aumento da eficiência e produtividade.",
    icons: arrow,
  },
  {
    title: "Maior visibilidade e controle dos processos.",
    icons: arrow,
  },
];
const contentFeaturesTwo = [
  {
    title:
      "Localização estratégica:",
     text:"CDs distintos para operação de itens leves e pesados localizados na região metropolitana de São Paulo, local de maior volume de vendas do e-commerce brasileiro.",
    icons: iconeThree.src,
  },
  {
    title:
      "CDs homologados: ",
      text:"Pelos principais marketplaces que possibilita a concentração em um único estoque ou estoque avançado (Curva A).",
    icons: iconeTwo.src,
  },
  {
    title:
      "140 pontos de PUDOs: ",
      text:"Espalhados no centro da cidade em parceria com marketplaces.",
    icons: iconeFour.src,
  },
  {
    title:
      "Gestão logística: ",
      text:"Integrada com um time especializado em fulfillment trabalhando lado a lado a uma equipe de transportes para redução de prazo de entrega (Same Day e Next Day Delivery).",
    icons: iconeOne.src,
  },
];

const contentTopics = [
  {
    icon: imageOne,
    title: `Experiência comprovada em fulfillment e logística integrada.`,
    text: "",
  },
  {
    icon: imageTwo,
    title:
      "Personalização de serviços para atender às necessidades do seu negócio.",
    text: "",
  },
  {
    icon: imageThree,
    title: "Implementação de WMS para uma gestão eficiente do estoque.",
    text: "",
  },
  {
    icon: imageFour,
    title:
      "Equipe dedicada e suporte personalizado para garantir a satisfação do cliente.",
    text: "",
  },
];

export default function Logistica() {
  return (
    <main>
      {/* <!-- Google Tag Manager --> */}
      <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5M78MWM');`}</Script>
      {/* <!-- End Google Tag Manager --> */}
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5M78MWM"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <Header />
      <JumboTron
        textButtonOne="fale com um especialista"
        textButtonTwo="saiba mais"
        linkButtonOne=""
        linkButtonTwo=""
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        logo={fulfillmet.src}
        title="Fulfillment inteligente que garante performance e impulsionam suas vendas."
        text="Aumente suas vendas, reduza prazo de entrega e custos de frete e fidelize seus clientes com nossa solução de fulfillment escalável e personalizada."
        banner={banner.src}
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <ProductInstitutional
        title="Controle, Armazenagem e Entrega Eficientes."
        text="Todo o processo logístico desde o momento da venda do pedido até a expedição. Combinando tecnologia avançada e expertise em logística, o fulfillment é responsável por garantir um controle de estoque eficiente, uma armazenagem segura e um processo de separação eficaz que permite que seus clientes recebam seus produtos com precisão, agilidade e segurança."
        banner={banner.src}
        corButtonOne="#FBC709"
        corButtonThree="#D3A707"
        linkButtonOne=""
        linkButtonTwo=""
        textButtonOne="saiba mais"
        textButtonTwo="falar com consultor"
      />
      <Numbers
        cor="#fbc705"
        title="Garanta a satisfação do seu cliente com uma gestão logística 100% integrada em todas as etapas."
        number={number}
        banner="https://uxsolutions.com.br/wp-content/uploads/2023/07/universo-uxs-2.gif"
        text=""
      />
      <ThreeTopics
        title="Benefícios de escolher a UX."
        text=""
        content={contentTopics}
      />
      <FeaturesComponent
        banner={bannerInstitucional.src}
        rowReverse={false}
        content={contentFeaturesOne}
        button
        titleSection="Fulfillment Personalizado."
        text="Nosso foco é fornecer soluções de fulfillment sob medida para atender às demandas específicas do seu negócio. Desde o armazenamento até a entrega, cuidamos de cada etapa do processo para garantir uma experiência de compra excepcional para seus clientes."
      />
      <FeaturesComponentLog
        banner={estoqueImage.src}
        rowReverse={true}
        content={contentFeaturesTwo}
        button={false}
        titleSection="Estoque avançado."
        text=""
      />
      <Cta
        button={false}
        title={"Certificação ANVISA."}
        text={
          "Nosso CD de Barueri conta com a certificação da ANVISA, um espaço dentro de todos os parâmetros de segurança garantido pela Agência Nacional de Vigilância Sanitária, que nos permite receber e operar: cosméticos, perfumes, produtos de higiene, embalagem para alimentos e alimentos, tudo dentro dos padrões de saúde e segurança que o seu negócio precisa."
        }
        logo={logoAnvisa.src}
        banner={anvisaImage.src}
      />
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={true}
        image={wmsImage.src}
        title="Implementação de WMS."
        text="Com a nossa plataforma de gerenciamento de armazém (WMS), oferecemos uma gestão eficiente e transparente do estoque. Nosso sistema avançado permite o monitoramento em tempo real, controle de inventário preciso e otimização dos processos de picking e packing."
      />
      <Cta
        button={false}
        title={"CD homologado Amazon."}
        text={
          "Nosso CD de Barueri conta com a certificação da ANVISA, um espaço dentro de todos os parâmetros de segurança garantido pela Agência Nacional de Vigilância Sanitária, que nos permite receber e operar: cosméticos, perfumes, produtos de higiene, embalagem para alimentos e alimentos, tudo dentro dos padrões de saúde e segurança que o seu negócio precisa."
        }
        logo={logoAmazon.src}
        banner={""}
      />
      <CarroselVertical
        title="Infraestrutura de Armazenamento."
        text="Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega. Nossos CDs são equipados com tecnologia de ponta e segurança de alto nível para proteger seus produtos."
        content={content}
      />
      <CarroselVerticalMobile
        title="Infraestrutura de Armazenamento."
        sub="Operamos em 3 Centros de Distribuição próprios, que somam mais de 30.000m2, estrategicamente localizados, garantindo uma ampla cobertura geográfica e reduzindo os prazos de entrega. Nossos CDs são equipados com tecnologia de ponta e segurança de alto nível para proteger seus produtos."
        content={content}
      />

      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}
