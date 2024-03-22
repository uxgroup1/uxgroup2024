"use client";

import Header from "@/components/header";
import ContactForm from "@/components/institucional/ContactForm";
import Footer from "@/components/Footer";
import JumboTron from "@/components/produtos/jumbotron";
import SecondSection from "@/components/produtos/SecondSection";
import { Cases } from "@/components/institucional/cases";
import { title } from "process";
import CarroselImages from "@/components/produtos/carrouselVertical";
import CarroselImageMobile from "@/components/produtos/carrouselVertical/mobile";
import Cta from "@/components/cta";
import FeaturesComponent from "@/components/produtos/features";

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
    image:
      "https://uxgroup.com.br/_next/static/media/Desktop-sessao-fluxo-PLANEJAMENTO.f88261ee.png",
  },
  {
    title: "CD Barueri",
    image:
      "https://uxgroup.com.br/_next/static/media/Desktop-sessao-fluxo-VENDAS.e8046c01.png",
  },
  {
    title: "CD Itajaí",
    image:
      "https://uxgroup.com.br/_next/static/media/Desktop-sessao-fluxo-ENTREGAS.d9fc375e.png",
  },
];

const contentFeatures = [
  {
    title: "Experiência comprovada em fulfillment e logística integrada.",
    icons: "",
  },
  {
    title:
      "Personalização de serviços para atender às necessidades exclusivas do seu negócio.",
    icons: "",
  },
  {
    title: "Implementação de WMS para uma gestão eficiente do estoque.",
    icons: "",
  },
  {
    title: "Rede de distribuição abrangente com três CDs próprios.",
    icons: "",
  },
  {
    title:
      "Equipe dedicada e suporte personalizado para garantir a satisfação do cliente.",
    icons: "",
  },
];

export default function Logistica() {
  return (
    <main>
      <Header />
      <JumboTron title="We invest in the world’s potential"  text="Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth." banner=""/>
      <SecondSection
        title="Fulfillment Personalizado"
        text="Nosso foco é fornecer soluções de fulfillment sob medida para atender às demandas específicas do seu negócio. Desde o armazenamento até a entrega, cuidamos de cada etapa do processo para garantir uma experiência de compra excepcional para seus clientes."
        image="."
      />
      <Cases content={slides} />
      <SecondSection
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
        banner={
          "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
      />
      <FeaturesComponent
      rowReverse
      titleSection="Benefícios de escolher a UX"
        content={contentFeatures}
        banner="https://uxgroup.com.br/_next/static/media/Desktop-sessao-fluxo-PLANEJAMENTO.f88261ee.png"
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
