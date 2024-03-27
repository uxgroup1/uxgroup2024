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
import { Cases } from "@/components/institucional/cases";
const CarroselImages = dynamic(
  () => import("@/components/produtos/carrouselVertical")
);
const CarroselImageMobile = dynamic(
  () => import("@/components/produtos/carrouselVertical/mobile")
);
const Cta = dynamic(() => import("@/components/cta"));
import FeaturesComponent from "@/components/produtos/features";
import arrowImage from "@/assets/logistica/arrow/arrowListComponentes.svg";
import itapeviImage from "@/assets/logistica/cdsImages/itapevi.jpg";
import barueriImage from "@/assets/logistica/cdsImages/barueri.jpg";
import itajaiImage from "@/assets/logistica/cdsImages/itajai.jpg";
import anvisaImage from "@/assets/logistica/anvisa.png";
import fulfillmet from "@/assets/logos/fulfillment.svg"

const slides = [
  {
    title: "Lorem Ipsum",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Ema Watson",
  },
];

const CarroselImagesContent = [
  {
    title: "CD Itapevi",
    image: itapeviImage.src,
  },
  {
    title: "CD Barueri",
    image: barueriImage.src,
  },
  {
    title: "CD Itajaí",
    image: itajaiImage.src,
  },
];

const contentFeatures = [
  {
    title: "Experiência comprovada em fulfillment e logística integrada.",
    icons: arrowImage,
  },
  {
    title:
      "Personalização de serviços para atender às necessidades exclusivas do seu negócio.",
    icons: arrowImage,
  },
  {
    title: "Implementação de WMS para uma gestão eficiente do estoque.",
    icons: arrowImage,
  },
  {
    title: "Rede de distribuição abrangente com três CDs próprios.",
    icons: arrowImage,
  },
  {
    title:
      "Equipe dedicada e suporte personalizado para garantir a satisfação do cliente.",
    icons: arrowImage,
  },
];

export default function Logistica() {
  return (
    <main>
      <Header />
      <JumboTron
      corButtonOne="#fbc705"
      corButtonThree="#D3A707"
      logo={fulfillmet}
        title="We invest in the world’s potential"
        text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
        banner=""
      />
      <section style={{ paddingTop: "50px", paddingBottom: "0px" }}></section>
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={false}
        title="Fulfillment Personalizado"
        text="Nosso foco é fornecer soluções de fulfillment sob medida para atender às demandas específicas do seu negócio. Desde o armazenamento até a entrega, cuidamos de cada etapa do processo para garantir uma experiência de compra excepcional para seus clientes."
        image="."
      />
      <Cases content={slides} />
      <SecondSection
        corButtonOne="#fbc705"
        corButtonThree="#D3A707"
        flowReverse={true}
        image="."
        title="Implementação de WMS"
        text="Com a nossa plataforma de gerenciamento de armazém (WMS), oferecemos uma gestão eficiente e transparente do estoque. Nosso sistema avançado permite o monitoramento em tempo real, controle de inventário preciso e otimização dos processos de picking e packing."
      />
      <CarroselImages content={CarroselImagesContent} />
      <CarroselImageMobile content={CarroselImagesContent} />
      <Cta
        button={false}
        title={"Certificação ANVISA"}
        text={
          "Nosso CD de Barueri conta com a certificação da ANVISA, um espaço dentro de todos os parâmetros de segurança garantido pela Agência Nacional de Vigilância Sanitária, que nos permite receber e operar: cosméticos, perfumes, produtos de higiene, embalagem para alimentos e alimentos, tudo dentro dos padrões de saúde e segurança que o seu negócio precisa."
        }
        banner={anvisaImage.src}
      />
      <FeaturesComponent
        rowReverse
        titleSection="Benefícios de escolher a UX"
        content={contentFeatures}
        banner="https://uxgroup.com.br/_next/static/media/Desktop-sessao-fluxo-PLANEJAMENTO.f88261ee.png"
      />
      <section style={{ paddingTop: "0px", paddingBottom: "50px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}
