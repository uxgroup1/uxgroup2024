"use client";

import CarroselVertical from "@/components/institucional/carrouselVerticalMain";
import image from "../assets/cta/ctaBanner.png";
import Cta from "@/components/cta";
import LogisticaComPerformance from "@/components/institucional/logisticaComPerformance";
import BannerMain from "@/components/institucional/bannerMain";
import UxPartners from "@/components/institucional/uxPartners";
import LogisticaSustentavel from "@/components/institucional/logisticaSustentavel";
import UxMidia from "@/components/institucional/uxMidia";
import { Blog } from "@/components/institucional/blog";
import CarroselVerticalMobile from "@/components/institucional/carrouselVerticalMain/mobile";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/institucional/ContactForm";
import EcoSistemaUx from "@/components/ecosistemaUx";
import { Cases } from "@/components/institucional/cases";

const slides = [
  {
    title: "Lorem Ipsum",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Ema Watson",
  },
  {
    title: "UX Group",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "John Doe",
  },
  {
    title: "UX Log",
    text: "lorem Ips laborum et sapien et dolor sit amet",
    imageSrc:
      "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Jane Smith",
  },
];

const content = [
  {
    index: 0,
    title: "TMS embarcador",
    contentTitle: "TMS embarcador",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
  {
    index: 1,
    title: "TMS Transportador",
    contentTitle: "TMS Transportador",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
  {
    index: 2,
    title: "Plataforma de comunicação",
    contentTitle: "Plataforma de comunicação",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
  {
    index: 3,
    title: "Loja digital",
    contentTitle: "Loja digital",
    contentText:
      "Reduza custos com organização, rastreabilidade e controle dos produtos em estoque e das suas vendas, garantindo eficiência operacional e satisfação do cliente.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <BannerMain />
      <EcoSistemaUx />
      <Cases content={slides} />
      <CarroselVertical title="Inove, Controle e Venda Mais" text="Adapte-se às mudanças do mercado com facilidade. Nossas soluções de tecnologia modulares oferecem flexibilidade, informação e eficiência para a gestão de fretes, gestão de transportes e comunicação das suas vendas digitais. Conheça nossas soluções!" content={content}/>
      <CarroselVerticalMobile />
      <Cta
        button={true}
        title={
          "Eficiência, Sustentabilidade e Informação: Descubra o futuro da logística com a UX"
        }
        banner={image.src}
      />
      <LogisticaComPerformance />

      <Cta
        button={true}
        title={
          "Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"
        }
        banner={image.src}
      />

      <LogisticaSustentavel />
      <UxPartners />
      <Blog />
      <UxMidia />
      <Cta
        button={true}
        title={
          "Descubra como podemos transformar sua operação, reduzir custos e impulsionar seus resultados"
        }
        banner={image.src}
      />
      <section style={{ paddingTop: "0px" }}></section>
      <ContactForm />
      <Footer />
    </main>
  );
}
